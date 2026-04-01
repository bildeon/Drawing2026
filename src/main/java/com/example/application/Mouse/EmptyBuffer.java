package com.example.application.Mouse;




import com.example.application.html.svg;
import com.example.application.under.WeldPoint;
import com.example.application.weld.CalcValues;
import com.example.application.weld.CalcBase;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;



/**
 * Generate string of svg code for weldPoint on printing page
 *
 * @author Erik Andreas Vold -  erikvold84@gmail.com
 *
 */

public class EmptyBuffer {
    private   Point firstPoint = new Point();
    private  Point middelPoint = new Point();
    private  Point lastPoint = new Point();
    private  Point textPoint = new Point();
    private    String ident;
    private   boolean punktPlottes;
    private  boolean textPlottes;
    private   int numberWeld;
    private   int indicator;
    private     WeldPoint tester = new WeldPoint();
    private  ArrayList<WeldPoint> weldList = new ArrayList<>();

    private ArrayList<WeldPoint> actualList = new ArrayList<>();
    private    String svgInnhold;
    private     String svgWeld;
    private int type;
    private String typePlot;
    private    List<String> svgStringWeld = new ArrayList<>();
    private     List<String> svgStringCircleFirst = new ArrayList<>();
    private     List<String> svgStringCircleLast = new ArrayList<>();
    private    List<String> svgStringCircleMiddel = new ArrayList<>();
    private List<String> svgStringText = new ArrayList<>();
    private     String user;

    public EmptyBuffer() {
        String outSvgNew;  // =  outSvg;
        var canv = new svg();
        canv.setColor("red");

        String svgStop = canv.svgEnd();

        this.weldList = CalcValues.getWeldList();
        numberWeld = weldList.size();


        for (int i = 0; i < numberWeld; i++) {
            tester = weldList.get(i);
            indicator = tester.getIndicator();
            type = tester.getType();
            user = tester.getUser();
            /*
            if (indicator == CalcValues.plotIndicator) {
            } else {
                actualList.add(tester);
            }

             */
            if (CalcBase.getEmptyBuffer() == 12) {
                CalcBase.setEmptyBuffer(0);
                if ((type == 7 || type == 8 || type == 11 || type == 12) && user.equals(CalcValues.getUserID())) {
                } else {
                    actualList.add(tester);
                }
            }
            if (CalcBase.getEmptyBuffer() == 10) {
                CalcBase.setEmptyBuffer( 0);
                if ((type == 7 || type == 8 || type == 9 || type == 11 || type == 15 || type == 10) && user.equals(CalcValues.getUserID())) {
                } else {
                    actualList.add(tester);
                }
            }
            if (CalcBase.getEmptyBuffer() == 16) {
                CalcBase.setEmptyBuffer(0);
                if ((type == 7 || type == 9 || type == 15 || type == 16) && user.equals(CalcValues.getUserID())) {
                } else {
                    actualList.add(tester);
                }
            }

        }
        CalcValues.setWeldList(actualList);
    }
}


