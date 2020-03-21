import 'package:flutter/material.dart';
import 'timeline_node.dart';
import 'package:flutter/services.dart';

class TimelineView extends StatefulWidget {
  @override
  _TimelineViewState createState() => _TimelineViewState();
}

class _TimelineViewState extends State<TimelineView> {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      physics: NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      itemCount: 5,
      itemBuilder: (context, index) {
        return TimelineNode(
          style: TimelineNodeStyle(
            lineColor: Colors.green,
            pointColor: Colors.green,
            lineType: lineType(index),
          pointType: TimelineNodePointType.Circle,
        ),
          child: Padding(
            padding: EdgeInsets.all(4),
            child: Card(
              child: Container(
                height: 45,
                width: double.infinity,
              ),
            ),
          ),
        );
      },
    );
  }
}


TimelineNodeLineType lineType(int index){
  if(index==0)
    return TimelineNodeLineType.BottomHalf;
  if(index+1==null)
    return TimelineNodeLineType.TopHalf;
  else
    return TimelineNodeLineType.Full;
}

// Flutter code sample for FocusableActionDetector

// This example shows how keyboard interaction can be added to a custom control
// that changes color when hovered and focused, and can toggle a light when
// activated, either by touch or by hitting the `X` key on the keyboard.
//
// This example defines its own key binding for the `X` key, but in this case,
// there is also a default key binding for [ActivateAction] in the default key
// bindings created by [WidgetsApp] (the parent for [MaterialApp], and
// [CupertinoApp]), so the `ENTER` key will also activate the control.



// Flutter code sample for FocusableActionDetector

// This example shows how keyboard interaction can be added to a custom control
// that changes color when hovered and focused, and can toggle a light when
// activated, either by touch or by hitting the `X` key on the keyboard.
//
// This example defines its own key binding for the `X` key, but in this case,
// there is also a default key binding for [ActivateAction] in the default key
// bindings created by [WidgetsApp] (the parent for [MaterialApp], and
// [CupertinoApp]), so the `ENTER` key will also activate the control.

void main() => runApp(MyApp());
/// This Widget is the main application widget.
class MyApp extends StatelessWidget {
  static const String _title = 'Flutter Code Sample';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: _title,
      home: MyStatefulWidget(),
    );
  }
}

class FadButton extends StatefulWidget {
  const FadButton({Key key, this.onPressed, this.child}) : super(key: key);

  final VoidCallback onPressed;
  final Widget child;

  @override
  _FadButtonState createState() => _FadButtonState();
}

class _FadButtonState extends State<FadButton> {
  bool _focused = false;
  bool _hovering = false;
  bool _on = false;
  Map<LocalKey, ActionFactory> _actionMap;
  Map<LogicalKeySet, Intent> _shortcutMap;

  @override
  void initState() {
    super.initState();
    _actionMap = <LocalKey, ActionFactory>{
      ActivateAction.key: () {
        return CallbackAction(
          ActivateAction.key,
          onInvoke: (FocusNode node, Intent intent) => _toggleState(),
        );
      },
    };
    _shortcutMap = <LogicalKeySet, Intent>{
      LogicalKeySet(LogicalKeyboardKey.keyX): Intent(ActivateAction.key),
    };
  }

  Color get color {
    Color baseColor = Colors.lightBlue;
    if (_focused) {
      baseColor = Color.alphaBlend(Colors.black.withOpacity(0.25), baseColor);
    }
    if (_hovering) {
      baseColor = Color.alphaBlend(Colors.black.withOpacity(0.1), baseColor);
    }
    return baseColor;
  }


  double get height1 {
    double height= 100;
    if (_focused) {
      height= 70;
    }
    if (_hovering) {
      height= 200;
    }
    return height;
  }


  void _toggleState() {
    setState(() {
      _on = !_on;
    });
  }

  void _handleFocusHighlight(bool value) {
    setState(() {
      _focused = value;
    });
  }

  void _handleHoveHighlight(bool value) {
    setState(() {
      _hovering = value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _toggleState,
      child: FocusableActionDetector(
        actions: _actionMap,
        shortcuts: _shortcutMap,
        onShowFocusHighlight: _handleFocusHighlight,
        onShowHoverHighlight: _handleHoveHighlight,
        child: Row(
          children: <Widget>[
            Container(
              padding: EdgeInsets.all(10.0),
              color: color,
              child: widget.child,
            ),
            AnimatedContainer(
              duration: Duration(milliseconds: 100),
              width: 30,
              height: height1,
              margin: EdgeInsets.all(10.0),
              color: _on ? Colors.red : Colors.green,
            ),
          ],
        ),
      ),
    );
  }
}

class MyStatefulWidget extends StatefulWidget {
  MyStatefulWidget({Key key}) : super(key: key);

  @override
  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('FocusableActionDetector Example'),
      ),
      body: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: FlatButton(onPressed: () {}, child: AnimatedContainer(
                  duration: Duration(milliseconds: 500),
                  color: Colors.green,
                  child: Text('Press Me'))),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: FadButton(onPressed: () {}, child: Text('And Me')),
            ),
          ],
        ),
      ),
    );
  }
}