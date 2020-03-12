import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:pda_portal/theme.dart';
import 'package:line_awesome_icons/line_awesome_icons.dart';
import 'package:pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart' as customExT;

class TestCard extends StatefulWidget {
  @override
  _TestCardState createState() => _TestCardState();
}

class _TestCardState extends State<TestCard> {
  @override
  Widget build(BuildContext context) {
    final _media= MediaQuery.of(context).size;
    return Padding(
      padding: const EdgeInsets.only(bottom: 20, left:8, right:8),
      child: Column(
        children: <Widget>[
          AnimatedContainer(
            duration: Duration(milliseconds: 200),
            width: _media.width*0.8,
            child: Material(
              color: Colors.transparent,
              elevation: 5.0,
              child: customExT.ExpansionTile(
                headerBackgroundColor: card,
                backgroundColor: Colors.transparent,
                leading: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Container(
                      padding: EdgeInsets.only(right: 12.0),
                      decoration: BoxDecoration(
                          border: Border(
                              right: BorderSide(width: 1.0, color: Colors.white24))),
                      child: Icon(LineAwesomeIcons.exclamation_circle, color: Colors.yellowAccent),
                    ),
                  ],
                ),
                title: Text(
                  "Second International Conference on Smart IoT Systems - Innovations in Computing (SSIC-2019) ",
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                ),
                subtitle: Row(
                  children: <Widget>[
                    Icon(Icons.linear_scale, color: Colors.yellowAccent),
                    Text("Pending", style: TextStyle(color: Colors.white))
                  ],
                ),
                children: <Widget>[
                  Material(
                    color: Colors.transparent,
                    elevation: 1000,
                    child: AnimatedContainer(
                      width: _media.width*0.78,
                      decoration: BoxDecoration(
                        color: Colors.grey.shade50,
                      ),
                      duration: Duration(milliseconds: 100),
                      height: 200,
                    ),
                  ),
                  Material(
                    color: Colors.transparent,
                    elevation: 1000,
                    child: AnimatedContainer(
                      duration: Duration(milliseconds: 100),
                      width: _media.width*0.78,
                      height: 35,
                      child: Material(
                        color: card,
                        elevation: 2,
                        borderRadius: BorderRadius.only(bottomLeft: Radius.circular(5), bottomRight: Radius.circular(5)),
                        child: InkWell(
                          borderRadius: BorderRadius.only(bottomLeft: Radius.circular(5), bottomRight: Radius.circular(5)),
                          onTap: (){},
                          child: Align(
                              alignment: Alignment.center,
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: <Widget>[
                                  Padding(
                                    padding: const EdgeInsets.only(top: 2),
                                    child: Text('More Information', style: textWhite.copyWith(fontWeight: FontWeight.w400, fontSize: 15),),
                                  ),
                                  Icon(Icons.arrow_right, color: Colors.white,)
                                ],
                              )),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}


//FIRST DESIGN FOR THE CARDS BELOW. DO NOT USE BECAUSE IT'S UGLY, K THX.
//
//class reqCard extends StatefulWidget {
//  @override
//  _reqCardState createState() => _reqCardState();
//}
//
//class _reqCardState extends State<reqCard> {
//  bool _expanded= false;
//  @override
//  Widget build(BuildContext context) {
//    return Center(
//      child: Padding(
//        padding: const EdgeInsets.only(bottom:8.0),
//        child: Container(
//          width: wWidth(750),
//          child: Column(
//            children: <Widget>[
//              Material(
//                color: Colors.transparent,
//                elevation: 5,
//                child: Container(
//                  height: wHeight(100),
//                  decoration: BoxDecoration(
//                    borderRadius: BorderRadius.only(
//                        topLeft: Radius.circular(7.5),
//                        topRight: Radius.circular(7.5)
//                    ),
//                    color: Colors.white,
//                  ),
//                  child: Row(
//                    children: <Widget>[
//                      SizedBox(
//                        width: 10,
//                      ),
//                      Column(
//                        mainAxisAlignment: MainAxisAlignment.center,
//                        children: <Widget>[
//                          Container(
//                            height: wHeight(50),
//                            width: wWidth(50),
//                            decoration: BoxDecoration(
//                                shape: BoxShape.circle,
//                                color: Colors.blue
//                            ),
//                            child: Icon(Icons.announcement, color: Colors.white, size: wSize(25, 15),),
//                          ),
//                          SizedBox(
//                            height: 5,
//                          ),
//                          Text('ACTION\nREQUIRED',
//                            style: TextStyle(
//                                fontWeight: FontWeight.w400,
//                                fontSize: 10
//                            ),
//                            textAlign: TextAlign.center,
//                          ),
//                        ],
//                      ),
//                    ],
//                  ),
//                ),
//              ),
//              Opacity(
//                opacity: 1,
//                child: Padding(
//                  padding: const EdgeInsets.only(left: 5,right: 5),
//                  child: AnimatedContainer(
//                    decoration: BoxDecoration(
//                      color: Colors.grey.shade50,
//                      border: Border(
//                        left: BorderSide(width: 1, color: Colors.white),
//                        right: BorderSide(width: 1, color: Colors.white),
//                      ),
//                    ),
//                    duration: Duration(milliseconds: 200),
//                    height: _expanded?150:0,
//                  ),
//                ),
//              ),
//              Container(
//                height: 30,
//                decoration: BoxDecoration(
//                    boxShadow: [
//
//                    ],
//                    borderRadius: BorderRadius.only(
//                        bottomLeft: Radius.circular(7.5),
//                        bottomRight: Radius.circular(7.5)
//                    ),
//                    border: Border.all(width: 0.5, color: Colors.white)
//                ),
//                child: Material(
//                  elevation: 5,
//                  color: Colors.transparent,
//                  child: InkWell(
//                    borderRadius: BorderRadius.only(
//                      bottomLeft: Radius.circular(7.5),
//                      bottomRight: Radius.circular(7.5),
//                    ),
//                    onTap: (){
//                      setState((){
//                        _expanded?_expanded=false:_expanded=true;
//                      });
//                    },
//                    child: Row(
//                      mainAxisAlignment: MainAxisAlignment.center,
//                      children: <Widget>[
//                        Text('STATUS',
//                          style: TextStyle(
//                              color: Colors.white,
//                              fontWeight: FontWeight.bold,
//                              fontSize: 12
//                          ),
//                        ),
//                        _expanded?Icon(Icons.arrow_drop_up,color: Colors.white, size: 12,):Icon(Icons.arrow_drop_down,color: Colors.white, size: 12,),
//                      ],
//                    ),
//                  ),
//                ),
//              ),
//              SizedBox(height:10,)
//            ],
//          ),
//        ),
//      ),
//    );
//  }
//}
