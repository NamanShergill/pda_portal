import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:pda_portal/theme.dart';
import 'statusCard.dart';
import 'package:line_awesome_icons/line_awesome_icons.dart';
import 'package:flare_flutter/flare_actor.dart';
import 'package:pda_portal/widgets/bottomnav.dart';


var pageTitle = ValueNotifier(0);

class Dashboard extends StatefulWidget {
  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard>{
  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();
  @override
  Widget build(BuildContext context) {
    final _media = MediaQuery.of(context).size;
    return Scrollbar(
      child: Scaffold(
        key: _scaffoldKey,
        drawer: Drawer(
          child: Container(
            width: _media.width * 0.15,
            height: _media.height,
            color: background,
            child: Column(
              children: <Widget>[
                DrawerHeader(
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Placeholder(),
                  ),
                ),
                Flexible(
                  child: ListView.builder(itemCount: 5,itemBuilder: (context, index) {
                    return Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Card(
                        child: Center(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text("Placeholder Text"),
                              ),
                          ),
                      ),
                    );
                  }),
                ),
              ],
            ),
          ),
        ),
        body: NestedScrollView(
          headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
            return <Widget>[
              SliverAppBar(
                leading: Align(
                    alignment: Alignment.bottomCenter,
                    child: IconButton(icon: Icon(Icons.menu), onPressed: (){_scaffoldKey.currentState.openDrawer();},)),
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
                  titlePadding:
                      EdgeInsets.only(left: _media.width * 0.09, bottom: 15),
                  title: ValueListenableBuilder(
                    valueListenable: pageTitle,
                    builder: (context, value, child){
                      return Stack(
                        children: <Widget>[
                          AnimatedOpacity(
                            opacity: value==0?1:0,
                            duration: durVal,
                            child: Text(
                              'All Requests',
                              style: textWhite.copyWith(
                                fontSize: 35,
                                fontWeight: FontWeight.w300,
                              ),
                            ),
                          ),
                          AnimatedOpacity(
                            opacity: value==1?1:0,
                            duration: durVal,
                            child: Text(
                              'Urgent Requests',
                              style: textWhite.copyWith(
                                fontSize: 35,
                                fontWeight: FontWeight.w300,
                              ),
                            ),
                          ),
                          AnimatedOpacity(
                            opacity: value==2?1:0,
                            duration: durVal,
                            child: Text(
                              'Pending Requests',
                              style: textWhite.copyWith(
                                fontSize: 35,
                                fontWeight: FontWeight.w300,
                              ),
                            ),
                          ),
                          AnimatedOpacity(
                            opacity: value==3?1:0,
                            duration: durVal,
                            child: Text(
                              'Approved Requests',
                              style: textWhite.copyWith(
                                fontSize: 35,
                                fontWeight: FontWeight.w300,
                              ),
                            ),
                          ),
                          AnimatedOpacity(
                            opacity: value==4?1:0,
                            duration: durVal,
                            child: Text(
                              'Rejected Requests',
                              style: textWhite.copyWith(
                                fontSize: 35,
                                fontWeight: FontWeight.w300,
                              ),
                            ),
                          ),
                        ],
                      );
                    },
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
                  SizedBox(
                    height: 10,
                  ),
                  Center(
                    child: ListView.builder(
                        physics: NeverScrollableScrollPhysics(),
                        shrinkWrap: true,
                        itemCount: 8,
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
                            child: FlareActor(
                              "assets/flare/empty.flr",
                              alignment: Alignment.center,
                              fit: BoxFit.contain,
                              animation: "idle",
                            )),
                        Text(
                          "Nothing more to see here!",
                          style: textWhite,
                        )
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
        floatingActionButton: FloatingActionButton.extended(
          tooltip: "Submit a new request",
            onPressed: (){},
            backgroundColor: accent,
            label: Row(
              children: <Widget>[
                Icon(Icons.add, color: Colors.white, size: 13,),
                Padding(
                  padding: const EdgeInsets.only(top: 3),
                  child: Text('NEW', style: TextStyle(color: Colors.white, fontSize: 15, fontWeight: FontWeight.w500),),
                ),
              ],
            )
        ),
        bottomNavigationBar: BottomNavCustom(),
      ),
    );
  }
}
