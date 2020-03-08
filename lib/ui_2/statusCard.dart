import 'package:flutter/material.dart';
import 'package:pda_portal/theme.dart';
import 'package:line_awesome_icons/line_awesome_icons.dart';

class TestCard extends StatefulWidget {
  @override
  _TestCardState createState() => _TestCardState();
}

class _TestCardState extends State<TestCard> {
  bool _expanded= false;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 3),
      child: Column(
        children: <Widget>[
          Container(
            width: wWidth(800),
            child: Card(
              color: Colors.transparent,
              elevation: 5.0,
              margin: EdgeInsets.only(right: 10,left: 10,top: 10),
              child: Container(
                decoration: BoxDecoration(color: card),
                child: ListTile(
                  onTap: (){
                    setState(() {
                      _expanded?_expanded=false:_expanded=true;
                    });
                  },
                    contentPadding: EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
                    leading: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Container(
                          padding: EdgeInsets.only(right: 12.0),
                          decoration: BoxDecoration(
                              border: Border(
                                  right: BorderSide(width: 1.0, color: Colors.white24))),
                          child: Icon(LineAwesomeIcons.exclamation_circle, color: Colors.white),
                        ),
                      ],
                    ),
                  dense: true,
                  isThreeLine: false,
                    title: Text(
                      "Placeholder Text",
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                    ),
                    subtitle: Row(
                      children: <Widget>[
                        Icon(Icons.linear_scale, color: Colors.yellowAccent),
                        Text("Pending", style: TextStyle(color: Colors.white))
                      ],
                    ),
                    trailing:
                    _expanded
                      ?Icon(Icons.keyboard_arrow_up, color: Colors.white, size: 30.0)
                      :Icon(Icons.keyboard_arrow_down, color: Colors.white, size: 30.0),
                ),
              ),
            ),
          ),
          AnimatedContainer(
            width: wWidth(750),
            decoration: BoxDecoration(
              color: Colors.grey.shade50,
              border: Border(
                left: BorderSide(width: 1, color: Colors.white),
                right: BorderSide(width: 1, color: Colors.white),
              ),
              borderRadius: BorderRadius.only(bottomLeft: Radius.circular(5),bottomRight: Radius.circular(5)),
            ),
            duration: Duration(milliseconds: 200),
            height: _expanded?150:0,
            child: StatusInfo(),
          ),
        ],
      ),
    );
  }
}

class StatusInfo extends StatefulWidget {
  @override
  _StatusInfoState createState() => _StatusInfoState();
}

class _StatusInfoState extends State<StatusInfo> {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: wWidth(800),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: <Widget>[

        ],
      ),
    );
  }
}




//FIRST DESIGN FOR THE CARDS BELOW. DO NOT USE BECAUSE IT'S UGLY, K THX.

class reqCard extends StatefulWidget {
  @override
  _reqCardState createState() => _reqCardState();
}

class _reqCardState extends State<reqCard> {
  bool _expanded= false;
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.only(bottom:8.0),
        child: Container(
          width: wWidth(750),
          child: Column(
            children: <Widget>[
              Material(
                color: Colors.transparent,
                elevation: 5,
                child: Container(
                  height: wHeight(100),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(7.5),
                        topRight: Radius.circular(7.5)
                    ),
                    color: Colors.white,
                  ),
                  child: Row(
                    children: <Widget>[
                      SizedBox(
                        width: 10,
                      ),
                      Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Container(
                            height: wHeight(50),
                            width: wWidth(50),
                            decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: Colors.blue
                            ),
                            child: Icon(Icons.announcement, color: Colors.white, size: wSize(25, 15),),
                          ),
                          SizedBox(
                            height: 5,
                          ),
                          Text('ACTION\nREQUIRED',
                            style: TextStyle(
                                fontWeight: FontWeight.w400,
                                fontSize: 10
                            ),
                            textAlign: TextAlign.center,
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              Opacity(
                opacity: 1,
                child: Padding(
                  padding: const EdgeInsets.only(left: 5,right: 5),
                  child: AnimatedContainer(
                    decoration: BoxDecoration(
                      color: Colors.grey.shade50,
                      border: Border(
                        left: BorderSide(width: 1, color: Colors.white),
                        right: BorderSide(width: 1, color: Colors.white),
                      ),
                    ),
                    duration: Duration(milliseconds: 200),
                    height: _expanded?150:0,
                  ),
                ),
              ),
              Container(
                height: 30,
                decoration: BoxDecoration(
                    boxShadow: [

                    ],
                    borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(7.5),
                        bottomRight: Radius.circular(7.5)
                    ),
                    border: Border.all(width: 0.5, color: Colors.white)
                ),
                child: Material(
                  elevation: 5,
                  color: Colors.transparent,
                  child: InkWell(
                    borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(7.5),
                      bottomRight: Radius.circular(7.5),
                    ),
                    onTap: (){
                      setState((){
                        _expanded?_expanded=false:_expanded=true;
                      });
                    },
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Text('STATUS',
                          style: TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                              fontSize: 12
                          ),
                        ),
                        _expanded?Icon(Icons.arrow_drop_up,color: Colors.white, size: 12,):Icon(Icons.arrow_drop_down,color: Colors.white, size: 12,),
                      ],
                    ),
                  ),
                ),
              ),
              SizedBox(height:10,)
            ],
          ),
        ),
      ),
    );
  }
}
