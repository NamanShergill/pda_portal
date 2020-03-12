import 'package:flutter/material.dart';
import 'package:pda_portal/ui_2/dashboard.dart';
import 'package:pda_portal/theme.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        accentColor: accent,
        fontFamily: 'Josefin'
      ),
      home: Dashboard(),
    );
  }
}