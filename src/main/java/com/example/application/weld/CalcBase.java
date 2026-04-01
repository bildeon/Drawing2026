package com.example.application.weld;


import com.example.application.under.*;
import java.util.ArrayList;
import java.util.List;

public class CalcBase {
    private String userID;

    /// ///////////////////////////
    private static int startValue = 96;    // Give char a for use as symbols in the weld a-z and A - Z
    private static int numberOfSymbols = 0;
    private static String pathName = "";
    private static String comment = "";
    private static double zoomIndex = 1.0;
    private static int zoomStorage = 0;
    private static int emptyBuffer = 0;
    private static String svgBuffer = "";
    private static String image = "";
    private static String outSvg ="";
    private static String svgExtra ="";
    private static String startSvg ="";
    private static String outHtml = "";
    private static String stopHtml = "";
    private static String svgNew ="";
    private static String svgSymbol ="";
    private static String svgStop = "Sorry, your browser does not support inline SVG. </svg> \n";
    private static int valgIndeks = 4;
    private static int   placing = 0;
    private static int plotIndicator = 0;
    private static int zoomBuildUp= 6;
    private static String actualString = "";



    /// ///////////////////
    public CalcBase(String userID) {
        this.userID = userID;
        //   System.out.println("CalcBase userID: " + userID);
    }



    public static int getEmptyBuffer() {
        return emptyBuffer;
    }

    public static void setEmptyBuffer(int emptyBuffer) {
        CalcBase.emptyBuffer = emptyBuffer;
    }

    public static String getSvgBuffer() {
        return svgBuffer;
    }

    public static void setSvgBuffer(String svgBuffer) {
        CalcBase.svgBuffer = svgBuffer;
    }

    public static String getImage() {
        return image;
    }

    public static void setImage(String image) {
        CalcBase.image = image;
    }

    public static String getOutSvg() {
        return outSvg;
    }

    public static void setOutSvg(String outSvg) {
        CalcBase.outSvg = outSvg;
    }

    public static String getSvgExtra() {
        return svgExtra;
    }

    public static void setSvgExtra(String svgExtra) {
        CalcBase.svgExtra = svgExtra;
    }

    public static String getSvgNew() {
        return svgNew;
    }

    public static void setSvgNew(String svgNew) {
        CalcBase.svgNew = svgNew;
    }

    public static String getSvgSymbol() {
        return svgSymbol;
    }

    public static void setSvgSymbol(String svgSymbol) {
        CalcBase.svgSymbol = svgSymbol;
    }

    public static String getSvgStop() {
        return svgStop;
    }

    public static void setSvgStop(String svgStop) {
        CalcBase.svgStop = svgStop;
    }

    public static String getStartSvg() {
        return startSvg;
    }

    public static void setStartSvg(String startSvg) {
        CalcBase.startSvg = startSvg;
    }

    public static String getOutHtml() {
        return outHtml;
    }

    public static void setOutHtml(String outHtml) {
        CalcBase.outHtml = outHtml;
    }

    public static String getStopHtml() {
        return stopHtml;
    }

    public static void setStopHtml(String stopHtml) {
        CalcBase.stopHtml = stopHtml;
    }

    public static int getValgIndeks() {
        return valgIndeks;
    }

    public static void setValgIndeks(int valgIndeks) {
        CalcBase.valgIndeks = valgIndeks;
    }

    public static int getPlacing() {
        return placing;
    }

    public static void setPlacing(int placing) {
        CalcBase.placing = placing;
    }

    public static int getPlotIndicator() {
        return plotIndicator;
    }

    public static void setPlotIndicator(int plotIndicator) {
        CalcBase.plotIndicator = plotIndicator;
    }

    public static double getZoomIndex() {
        return zoomIndex;
    }

    public static void setZoomIndex(double zoomIndex) {
        CalcBase.zoomIndex = zoomIndex;
    }

    public static int getZoomStorage() {
        return zoomStorage;
    }

    public static void setZoomStorage(int zoomStorage) {
        CalcBase.zoomStorage = zoomStorage;
    }

    public static int getZoomBuildUp() {
        return zoomBuildUp;
    }

    public static void setZoomBuildUp(int zoomBuildUp) {
        CalcBase.zoomBuildUp = zoomBuildUp;
    }

    public static int getNumberOfSymbols() {
        return numberOfSymbols;
    }

    public static void setNumberOfSymbols(int numberOfSymbols) {
        CalcBase.numberOfSymbols = numberOfSymbols;
    }

    public static int getStartValue() {
        return startValue;
    }

    public static void setStartValue(int startValue) {
        CalcBase.startValue = startValue;
    }

    public static String getPathName() {
        return pathName;
    }

    public static void setPathName(String pathName) {
        CalcBase.pathName = pathName;
    }

    public static String getComment() {
        return comment;
    }

    public static void setComment(String comment) {
        CalcBase.comment = comment;
    }

    public static String getActualString() {
        return actualString;
    }

    public static void setActualString(String actualString) {
        CalcBase.actualString = actualString;
    }
}

