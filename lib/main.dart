import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:pda_portal/ui_2/dash2.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        textTheme: GoogleFonts.josefinSansTextTheme(
          Theme.of(context).textTheme.apply(),
        ),
        primarySwatch: Colors.blue,
      ),
      home: Dash2(),
    );
  }
}