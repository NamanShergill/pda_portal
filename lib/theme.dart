import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

Color background = Color(0xff222629);
Color card=Color(0xff474b4f);
Color accent= Color(0xff86c232);

//Bluish color palette below.

//Color gradient2 = Color(0xffffa12c);
//Color gradient1 = Color(0xfffe612c);
//Color background = Color(0xff3A4256);
//Color titlebar= Color(0xff3A4256);
//Color card=Color(0xff404b60);

TextStyle textWhite= TextStyle(color: Colors.white);

double wSize(double value, value2){
  double x=ScreenUtil().setSp(value)>value2?value2:ScreenUtil().setSp(value);
  return x;
}

double wHeight(double value){
  double x=ScreenUtil().setHeight(value);
  return x;
}

double wWidth(double value){
  double x=ScreenUtil().setWidth(value);
  return x;
}