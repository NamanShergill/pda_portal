import 'package:flutter/material.dart';
import 'package:pda_portal/theme.dart';
import 'statusCard.dart';
import 'package:line_awesome_icons/line_awesome_icons.dart';
import 'package:flare_flutter/flare_actor.dart';

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
                      EdgeInsets.only(left: _media.width * 0.1, bottom: 15),
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
      ),
    );
  }
}
