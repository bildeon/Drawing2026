package com.example.application.Mouse;
import com.example.application.html.WeldSymbol;
import com.example.application.html.svg;
import com.example.application.under.WeldPoint;
import com.example.application.views.list.*;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcValues;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Generate string of svg kode for the actual weldPoint code without circles
 *
 * @author Erik Andreas Vold -  erikvold84@gmail.com
 */
@AnonymousAllowed
@Route(value = "drawingsave" , layout = MainLayoutDraw.class)
@PageTitle("Weld IT AS - Drawing line ")
public class DrawWeldSave {
    private   Point firstPoint = new Point();
    private    Point middelPoint = new Point();
    private    Point lastPoint = new Point();
    private    Point textPoint = new Point();
    private    String ident;
    private    boolean punktPlottes;
    private boolean textPlottes;
    private    int numberWeld;
    private    WeldPoint tester = new WeldPoint();
    private    String aText = "0";
    private    int a1 = 0;
    private    int a2 = 0;
    private    int a3 = 0;

    private  int[] gang = new int[25];

    private    WeldSymbol sym1 = new WeldSymbol(aText, a1, a2, a1);
    private   WeldSymbol sym2 = new WeldSymbol(a1, a1, a2);

    private  ArrayList<WeldPoint> weldList = new ArrayList<>();
    private ArrayList<WeldPoint> actualList = new ArrayList<>();
    private    String svgInnhold;
    private   String svgWeld;
    private    String user;
    private    String svgTab = " ";
    private    int type;
    private    int indicator;
    private    String typePlot;
    private     int code;
    private List<String> svgStringWeld = new ArrayList<>();
    private     List<String> svgStringCircleFirst = new ArrayList<>();
    private     List<String> svgStringCircleLast = new ArrayList<>();
    private     List<String> svgStringCircleMiddel = new ArrayList<>();
    private    List<String> svgStringText = new ArrayList<>();

    public DrawWeldSave() {
        String outSvgNew;  // =  outSvg;
        var canv = new svg();
        //     System.out.println("inn DrawWeldinnString ");
        gang = CalcValues.getGang();
        String svgStop = canv.svgEnd();

        this.weldList = CalcValues.getWeldList();;
        numberWeld = weldList.size();
        svgWeld = "";
        //  CalcValues.svgNew = "";
        for (int i = 0; i < numberWeld; i++) {
            tester = weldList.get(i);
            indicator = tester.getIndicator();
            type = tester.getType();
            user = tester.getUser();
            code = tester.getCode();
            if (indicator == CalcBase.getPlotIndicator()) {
                actualList.add(0, tester);
            }
            if (gang[2] == 12) {
                if ((type == 7 || type == 8 || type == 11) && user.equals(CalcValues.getUserID())) {
                    actualList.add(0, tester);
                }
            }
            if (gang[2] == 10) {
                if ((type == 7 || type == 8 || type == 9 || type == 11 || type == 15) && user.equals(CalcValues.getUserID())) {
                    actualList.add(0, tester);
                }
            }
            if (gang[2] == 16) {
                if ((type == 7 || type == 9 || type == 15) && user.equals(CalcValues.getUserID())) {
                    actualList.add(0, tester);
                }
            }
        }

        int ant = svgStringWeld.size();
        for (int ind = 0; ind < actualList.size(); ind++) {
            tester = actualList.get(ind);
            svgTab = tester.getSymbol();
            firstPoint = tester.getWeldPointFirst();
            middelPoint = tester.getWeldPointMiddel();
            lastPoint = tester.getWeldPointLast();
            textPoint = tester.getWeldPointTextPoint();
            ident = tester.getWeldPointText();
            punktPlottes = tester.getWeldPointPlottes();
            textPlottes = tester.getWeldTextPlottes();
            type = tester.getType();
            typePlot = tester.getPlotType();
            String ident = tester.getWeldPointText();
            aText = tester.getAString();
            tester.setAString(aText);
            int code = tester.getCode();
            if (code == 1) {
                svgWeld += canv.drawBezier2(firstPoint.x, firstPoint.y, middelPoint.x, middelPoint.y, lastPoint.x, lastPoint.y);
                svgWeld += canv.drawText(ident, textPoint.x, textPoint.y);
            }
            if (code == 3) {
                svgWeld += canv.drawBezier3(firstPoint.x, firstPoint.y, middelPoint.x, middelPoint.y, lastPoint.x, lastPoint.y);
            }

            if (code == 2) {
                svgWeld += canv.drawText(ident, textPoint.x, textPoint.y);
                int tall = sym1.giveInteger(aText);
                String textNew = sym2.choseSymbol(tall, textPoint.x, textPoint.y);
                tester.setSymbol(textNew);
                svgWeld += textNew;
            }
/*
            if (punktPlottes && ( code == 1 || code == 3)) {
                svgWeld += canv.drawCircle(firstPoint.x, firstPoint.y, 3);
                svgWeld += canv.drawCircle(lastPoint.x, lastPoint.y, 3);
                svgWeld += canv.drawCircle(middelPoint.x, middelPoint.y, 3);
            }
            ;}

 */
            CalcBase.setSvgNew(svgWeld + CalcBase.getSvgSymbol());

        }

    }
}






