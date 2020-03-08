import 'package:flutter/material.dart';
import 'package:pda_portal/theme.dart';
import 'statusCard.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:line_awesome_icons/line_awesome_icons.dart';

class Dashboard extends StatefulWidget {
  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  @override
  Widget build(BuildContext context) {
    final _media= MediaQuery.of(context).size;
    return Scaffold(
      body: Row(
        children: <Widget>[
          Container(
            height: _media.height,
            width: _media.width,
            color: background,
            child: SingleChildScrollView(
              physics: BouncingScrollPhysics(),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  SizedBox(
                    height: 30,
                  ),
                  Container(
                    margin: EdgeInsets.only(left: ScreenUtil().setWidth(120)),
                    child: Text('Dashboard',
                      style: textWhite.copyWith(fontSize: 35, fontWeight: FontWeight.w300,),
                    ),
                  ),
                  Center(
                    child: Padding(
                      padding: const EdgeInsets.all(5.0),
                      child: Column(
                        children: <Widget>[
                          TestCard(),
                          TestCard(),
                          TestCard(),
                          TestCard(),
                        ],
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Center(
                    child: Container(
                      decoration: BoxDecoration(
                          border: Border.all(color: Colors.white),
                          color: Colors.white,
                          borderRadius: BorderRadius.all(Radius.circular(10))
                      ),
                      child: Material(
                        color: Colors.transparent,
                        child: InkWell(
                          borderRadius: BorderRadius.all(Radius.circular(10)),
                          onTap: (){
                          },
                          child: Container(
                            width: ScreenUtil().setWidth(200),
                            constraints: BoxConstraints(maxWidth: 200),
                            child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: <Widget>[
                                  Text('ADD', style: textWhite.copyWith(
                                      fontSize: wSize(25, 15),
                                      fontWeight: FontWeight.bold,
                                      color: background),
                                  ),
                                  Icon(Icons.add,
                                    size: wSize(30, 20),
                                    color: background,
                                  )
                                ],
                              ),
                            ),
                          ),
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
