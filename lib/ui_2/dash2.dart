import 'package:flutter/material.dart';
import 'package:line_awesome_icons/line_awesome_icons.dart';
import 'package:bubble_bottom_bar/bubble_bottom_bar.dart';
import 'package:pda_portal/theme.dart';
import 'dashboard.dart';


class Dash2 extends StatefulWidget {
  @override
  _Dash2State createState() => _Dash2State();
}

List pageView=[
  Dashboard()
];

class _Dash2State extends State<Dash2> {
  int currentIndex;
  final List<Widget> _children = [
    Dashboard(),
    Container(),
  ];

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    currentIndex = 0;
  }

  void changePage(int index) {
    setState(() {
      currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    //MediaQuery doesn't work properly for browsers, so I am using a package for layout scaling.
    return SafeArea(
      top: true,
      child: Scaffold(
        body: _children[currentIndex],
        floatingActionButton: FloatingActionButton.extended(
            onPressed: (){},
            backgroundColor: Colors.white,
            label: Align(
                alignment: Alignment.center,
                child: Row(
                  children: <Widget>[
                    Icon(Icons.add, color: Colors.black, size: 17,),
                    Text('ADD', style: TextStyle(color: Colors.black, fontSize: 15, fontWeight: FontWeight.w500),),
                  ],
                ))
        ),
        bottomNavigationBar: BubbleBottomBar(
          backgroundColor: background,
          opacity: 0.1,
          currentIndex: currentIndex,
          onTap: changePage,
          items: <BubbleBottomBarItem>[
            BubbleBottomBarItem(
              icon: Icon(Icons.dashboard),
              backgroundColor: Colors.white,
              title: Text('1st Step')
            ),
            BubbleBottomBarItem(
              icon: Icon(Icons.account_balance),
              title: Text('2nd Step'),
              backgroundColor: Colors.white,
            ),
            BubbleBottomBarItem(
              icon: Icon(Icons.check_circle),
              title: Text('3rd Step'),
              backgroundColor: Colors.white,
            ),
          ],
        ),
      ),
    );
  }
}
