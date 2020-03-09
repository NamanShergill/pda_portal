import 'package:flutter/material.dart';
import 'package:pda_portal/theme.dart';
import 'statusCard.dart';
import 'package:line_awesome_icons/line_awesome_icons.dart';
import 'package:flare_flutter/flare_actor.dart';

class Dashboard extends StatefulWidget{
  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> with TickerProviderStateMixin{
  @override
  Widget build(BuildContext context) {
    final _media = MediaQuery.of(context).size;
    return Scrollbar(
      child: Scaffold(
        body: NestedScrollView(
          headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
            return <Widget>[
              SliverAppBar(
                leading: Padding(
                    padding: EdgeInsets.only(top: 15, left: _media.width*0.015),
                    child: IconButton(
                      icon: Icon(Icons.menu),
                      onPressed: () {},
                    )),
                bottom: PreferredSize(
                  preferredSize: Size.fromHeight(15.0),
                  child: Text(''),
                ),
                backgroundColor: background,
                expandedHeight: 150.0,
                floating: false,
                pinned: true,
                flexibleSpace: FlexibleSpaceBar(
                  collapseMode: CollapseMode.parallax,
                  titlePadding: EdgeInsets.only(left: _media.width*0.1, bottom: 15),
                  title: Text(
                    'Pending Requests',
                    style: textWhite.copyWith(
                      fontSize: 35,
                      fontWeight: FontWeight.w300,
                    ),
                  ),
                ),
              ),
            ];
          },
          body: Container(
            width: _media.width,
            color: background,
            child: SingleChildScrollView(
              physics: BouncingScrollPhysics(),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Center(
                    child: ListView.builder(
                        physics: NeverScrollableScrollPhysics(),
                        shrinkWrap: true,
                        itemCount: 15,
                        itemBuilder: (context, index) {
                          return TestCard();
                        }),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Center(
                    child: Column(
                      children: <Widget>[
                        Container(
                            height: 150,
                            width: 150,
                            child: FlareActor("assets/flare/empty.flr",
                              alignment: Alignment.center,
                              fit: BoxFit.contain,
                              animation: "idle",)
                        ),
                        Text("Nothing more to see here!", style: textWhite,)
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
