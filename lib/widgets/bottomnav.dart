import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:pda_portal/theme.dart';
import 'package:pda_portal/ui_2/dashboard.dart';

int selectedIndex= 0;
List<String> navBottom = ["All","Urgent","Pending","Approved", "Rejected"];

class BottomNavCustom extends StatefulWidget {
  @override
  _BottomNavCustomState createState() => _BottomNavCustomState();
}

class _BottomNavCustomState extends State<BottomNavCustom>{
  @override
  Widget build(BuildContext context) {
    final _media= MediaQuery.of(context).size;
    return Container(
        constraints: BoxConstraints(
            minHeight: 50
        ),
      width: _media.width,
      height: _media.height*0.08,
      color: background,
      child: ListView.builder(
        physics: NeverScrollableScrollPhysics(),
          itemCount: 5,
          scrollDirection: Axis.horizontal,
          itemBuilder: (context, index){
             return BottomBarTab(navBottom[index], index, this);
          })
      );
  }
}

class BottomBarTab extends StatefulWidget {
  _BottomNavCustomState parent;
  final String name;
  final int index;
  BottomBarTab(this.name, this.index, this.parent);
  @override
  _BottomBarTabState createState() => _BottomBarTabState();
}

class _BottomBarTabState extends State<BottomBarTab> {
  @override
  Widget build(BuildContext context) {
    bool checkIndex(){
      bool x= selectedIndex==widget.index;
      return x;
    }
    final _media= MediaQuery.of(context).size;
    return AnimatedContainer(
      constraints: BoxConstraints(
        minHeight: 50
      ),
      decoration: BoxDecoration(
        color: checkIndex()
            ?Colors.white
            :background,
        border: Border(
          top: checkIndex()
              ?BorderSide(color: accent, width: 4, style: BorderStyle.solid)
              :BorderSide(color: Colors.white, width: 2),
        ),
      ),
      duration: Duration(milliseconds: 350),
      width: _media.width*0.2,
      height: _media.height*0.08,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          hoverColor: Colors.black26.withOpacity(0.08),
          onTap: (){
            setState(() {
              selectedIndex= widget.index;
              widget.parent.setState(() { });
              pageTitle.value= selectedIndex;
            });
          },
          child: Container(
            child: Center(
                child: Text(
                  widget.name,
              style: checkIndex()
                  ?TextStyle(fontWeight: FontWeight.w400, color: Colors.black, fontSize:20)
                  :textWhite.copyWith(fontWeight: FontWeight.w300, fontSize: 17),
                ),
            ),
          ),
        ),
      ),
    );
  }
}
