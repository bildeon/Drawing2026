package com.example.application.Mouse;


import com.example.application.images.BezierViewR;
import com.example.application.images.SvgDraggableTextView;
import com.example.application.under.ExtraComment;
import com.example.application.under.ExtraEllipse;
import com.example.application.under.ExtraTall;
import com.example.application.under.WeldPoint;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcValues;
import com.example.application.menu.ZoomMenue5;
import com.example.application.menu.ZoomMenue6;
import com.example.application.menu.ZoomImage6;
import com.vaadin.flow.component.UI;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Moving an old point to new point after locating it
 *
 *
 * @author Erik Andreas Vold -  erikvold84@gmail.com
 */


public class MouseMoved {
    private  static ExtraTall foundType ;
    private  static ExtraTall  originalType ;
    private     int big = 5;
    private    boolean moveNew;
    private    int enterType;
    private static int foundIndex;
    private    Point toPointNew = new Point();
    private     Point movedPoint = new Point();
    private    Boolean entered;
    private  ArrayList<WeldPoint> weldList = new ArrayList<>();

    private  static WeldPoint tester = new WeldPoint();
    private  static int enterTypeNew;
    private  static int[] telleValue = new int[8];
    private static List<ExtraTall> actualMoveString = new ArrayList<>();
    private    Point point = new Point();
    private  static ExtraComment test ;
    private  static ExtraTall testTall;
    private static List<ExtraTall> extraTall = new ArrayList<>();
    private static List<ExtraTall> extraTallTegn = new ArrayList<>();
    private static List<ExtraComment> extraComment = new ArrayList<>();
    private static List<ExtraTall> actualMoveStringNew = new ArrayList<>();
    public MouseMoved(Point movedPoint, Point toPointNew) {
     //   new MakeMovePossible();
        this.movedPoint = movedPoint;
        this.toPointNew = toPointNew;
        this.weldList = CalcValues.getWeldList();
        this.moveNew = CalcValues.isMoveNew();
        this.entered = false;
        extraTall = CalcValues.getExtraTall();
        extraTallTegn = CalcValues.getExtraTallTegn();
        extraComment = CalcValues.getExtraComment();
        actualMoveString = CalcValues.getActualMoveString();
        actualMoveStringNew = CalcValues.getActualMoveStringNew();
        //   System.out.println("inn mouseMoved  ");
        if (weldList.size() >= 1) {                   // kan ikke flytte element i tom liste
            enterType = 0;
            foundIndex = 0;
            entered = false;

            for (int i = 0; i < weldList.size(); i++) {
                if (!entered) {
                    tester = weldList.get(i);
                    point = tester.getWeldPointFirst();
                    if ((movedPoint.x <= (point.x + big)) && (movedPoint.x >= (point.x - big))) {
                        if ((movedPoint.y <= (point.y + big)) && (movedPoint.y >= (point.y - big))) {
                            enterType = 1;
                            foundIndex = i;
                            entered = true;
                        }
                    }
                }
            }
            for (int j = 0; j < weldList.size(); j++) {
                if (!entered) {
                    tester = weldList.get(j);
                    point = tester.getWeldPointLast();
                    if ((movedPoint.x <= (point.x + big)) && (movedPoint.x >= (point.x - big))) {
                        if ((movedPoint.y <= (point.y + big)) && (movedPoint.y >= (point.y - big))) {
                            enterType = 3;
                            foundIndex = j;
                            entered = true;
                        }
                    }
                }
            }
            for (int l = 0; l < weldList.size(); l++) {
                if (!entered) {
                    tester = weldList.get(l);
                    point = tester.getWeldPointMiddel();
                    if ((movedPoint.x <= (point.x + big)) && (movedPoint.x >= (point.x - big))) {
                        if ((movedPoint.y <= (point.y + big)) && (movedPoint.y >= (point.y - big))) {
                            enterType = 2;
                            foundIndex = l;
                            entered = true;
                        }
                    }
                }
            }
            for (int m = 0; m < weldList.size(); m++) {
                if (!entered) {
                    tester = weldList.get(m);
                    point = tester.getWeldPointTextPoint();
       //             System.out.println(movedPoint + "  " +  point);
                    if ((movedPoint.x <= (point.x + big)) && (movedPoint.x >= (point.x - big))) {
                        if ((movedPoint.y <= (point.y + big)) && (movedPoint.y >= (point.y - big))) {
                            enterType = 4;
                            foundIndex = m;
                            entered = true;
                        }
                    }
                }
            }
            /*
            for (int  n = 0; n < weldList.size(); n++) {
                if (!entered) {
                    tester = weldList.get(n);
                    point = tester.getWeldPointTextPoint();
                    if ((movedPoint.x <= (point.x + big)) && (movedPoint.x >= (point.x - big))) {
                        if ((movedPoint.y <= (point.y + big)) && (movedPoint.y >= (point.y - big))) {
                            enterType = 5;
                            foundIndex = n;
                            entered = true;
                        }
                    }
                }
            }

             */


            // enterType indikerer punktType indeks 1, 2 , 3 eller 4
            // foundIndex indeksen til aktuelt punkt i weldList
            //       System.out.println("endelig funnet punkt " + entered + "  " + foundIndex + "  type " + enterType);
            if (entered) {
      //          System.out.println("mouseMoved " + entered + " " + enterType + "  " +  foundIndex);
                tester = weldList.get(foundIndex);
                if (enterType == 1) {
                    tester.setWeldPointFirst(toPointNew);
                }
                if (enterType == 2 && tester.getCode() != 3) {
                    tester.setWeldPointMiddel(toPointNew);
                }
                if (enterType == 3) {
                    tester.setWeldPointLast(toPointNew);
                }
                if (enterType == 4) {
                    tester.setWeldPointTextPoint(toPointNew);
                    String test = tester.getWeldPointText();
                    if (test.substring(0, 1).equals(".")) {
                    } else {
                        int a1 = toPointNew.x;
                        int a2 = toPointNew.y;
                    }
                    weldList.set(foundIndex, tester);   // setter inn nye verdier
                    CalcValues.setWeldList(weldList);   // setter inn nye verdier
                }
                if (moveNew) {
                    enterTypeNew = enterType;
                    new MouseReleased(movedPoint);
                    if (CalcBase.getValgIndeks() == 1) {
                  ///      new BezierViewR();
                        UI.getCurrent().getPage().setLocation("mover");
                    }
                    if (CalcBase.getValgIndeks() == 2) {
                  //      new BezierViewR();
                        UI.getCurrent().getPage().setLocation("mover");
                    }
                    if (CalcBase.getValgIndeks() == 3) {
                   //     new ZoomMenue5();
                        UI.getCurrent().getPage().setLocation("zoommenue5");
                    }
                    if (CalcBase.getValgIndeks() == 4) {
                        //     new ZoomMenue5();
                        UI.getCurrent().getPage().setLocation("zoomimage5");
                    }
                } else {
                    new DrawWeldinnString();
                }
            }
        }

        //////////////////////////////////////////////////////////
        if ( extraComment.size() > 0 ) {
            System.out.println("MoueMoved  extraComment");
            enterType = 0;
            foundIndex = 0;
            entered = false;
            for ( int l= 0 ; l < extraComment.size() ; l++ ) {
                test = extraComment.get(l);
                int x = test.getFirstX();
                int y = test.getFirstY();
                if ((movedPoint.x <= (x + big)) && (movedPoint.x >= (x - big))) {
                    if ((movedPoint.y <= (y + big)) && (movedPoint.y >= (y - big))) {
                        enterType = 5;
                        foundIndex = l;
                        entered = true;
                        enterTypeNew = enterType;
                        //      System.out.println(" funnet 1 " + CalcValues.extraComment.size());
                        extraComment.remove(l);
                        //       System.out.println(" funnet 2 " + CalcValues.extraComment.size());
                    }
                }


            }
            CalcValues.setExtraComment(extraComment);

            if (entered) {
                //     System.out.println(enterTypeNew);

                if (CalcBase.getValgIndeks() == 1) {
                //    new SvgDraggableTextView();
                    UI.getCurrent().getPage().setLocation("movercomment");
                }
                if (CalcBase.getValgIndeks() == 2) {
                //    new SvgDraggableTextView();
                    UI.getCurrent().getPage().setLocation("movercomment");
                }
                if (CalcBase.getValgIndeks() == 3) {
               //    new ZoomMenue6();
          //          UI.getCurrent().getPage().setLocation("zoommenue6");
                }


            }
        }
        ////////////////////////
        if ( actualMoveString.size() > 0 ) {
            enterType = 0;
            foundIndex = 0;
            entered = false;
            for ( int ll = 0 ; ll < actualMoveString.size() ; ll++ ) {
                testTall = actualMoveString.get(ll);
                int x = testTall.getFirstX();
                int y = testTall.getFirstY();
                //        String uu = testTall.getLastString();
                //       System.out.println("x " + x + " y "  +  y + "  "  +  movedPoint.x + "  "  +  movedPoint.y +  "  " + big + "  " + ll + "   "  + uu  );
                if ((movedPoint.x <= (x + big)) && (movedPoint.x >= (x - big))) {
                    if ((movedPoint.y <= (y + big)) && (movedPoint.y >= (y - big))) {
                        enterType = 6;
                        foundIndex = ll;
                        entered = true;
                        enterTypeNew = enterType;
                        foundType = testTall;
                        ExtraTall extra = extraTallTegn.get(ll);
                        String str = extra.getLastString();
                        int x1 = extra.getFirstX();
                        int y1 = extra.getFirstY();
                        originalType = new ExtraTall(str, x1, y1);
                        extraTallTegn.set(ll, new ExtraTall("", x1, y1));
                        CalcValues.setExtraTallTegn(extraTallTegn);
                    }
                }
            }

            for ( int ll = actualMoveString.size()-1 ; ll > actualMoveString.size() ; ll-- ) {
                actualMoveString.remove(ll);
            }
             CalcValues.setActualMoveString(actualMoveString);
            if (entered) {
                //      System.out.println(enterTypeNew);
                if (CalcBase.getValgIndeks() == 1) {
             //       new SvgDraggableTextView();
                    UI.getCurrent().getPage().setLocation("movercomment");
                }
                if (CalcBase.getValgIndeks() == 2) {
              //      new SvgDraggableTextView();
                    UI.getCurrent().getPage().setLocation("movercomment");
                }
                if (CalcBase.getValgIndeks()  == 3) {
               //     new ZoomMenue6();
        //            UI.getCurrent().getPage().setLocation("zoommenue6");
                }



            }
        }

        /////////////////////////////////////////////////
        if ( actualMoveStringNew.size() > 0 ) {
            enterType = 0;
            foundIndex = 0;
            entered = false;
            for ( int l= 0 ; l < actualMoveStringNew.size() ; l++ ) {
                testTall = actualMoveStringNew.get(l);
                int x = testTall.getFirstX();
                int  y = testTall.getFirstY();
                if ((movedPoint.x <= (x + big)) && (movedPoint.x >= (x - big))) {
                    if ((movedPoint.y <= (y + big)) && (movedPoint.y >= (y - big))) {
                        enterType = 7;
                        foundIndex = l;
                        entered = true;
                        enterTypeNew = enterType;
                        foundType = testTall;
                        ExtraTall extra = extraTall.get(l);
                        String str = extra.getLastString();
                        int x1 = extra.getFirstX();
                        int y1 = extra.getFirstY();

                        extraTall.set(l, new ExtraTall("", x1, y1));
                        CalcValues.setExtraTall(extraTall);

                    }
                }
            }
            for ( int ll = actualMoveStringNew.size()-1 ; ll > actualMoveStringNew.size() ; ll-- ) {
                actualMoveStringNew.remove(ll);
            }
            if (entered) {
                //      System.out.println(enterTypeNew);
                if (CalcBase.getValgIndeks() == 1) {
                    new SvgDraggableTextView();
                    UI.getCurrent().getPage().setLocation("movercomment");
                }
                if (CalcBase.getValgIndeks() == 2) {
                    new SvgDraggableTextView();
                    UI.getCurrent().getPage().setLocation("movercomment");
                }
                if (CalcBase.getValgIndeks() == 3) {
          //          new ZoomMenue6();
       //             UI.getCurrent().getPage().setLocation("zoommenue6");
             //       new SvgDraggableTextView();
                    UI.getCurrent().getPage().setLocation("zoommenue4");
                }
                if (CalcBase.getValgIndeks() == 4) {
           //        new ZoomImage6();
                    //             UI.getCurrent().getPage().setLocation("zoommenue6");
            //        new SvgDraggableTextView();
                    UI.getCurrent().getPage().setLocation("zoomimage0");
                }


            }
        }

        /////////////////////////////////////////////////

    }
    public static int getFoundIndex() {
        return foundIndex;
    }
    public static ExtraComment getTest() { return test; }
    public static ExtraTall getFoundType() { return foundType;}
    public static ExtraTall getOriginalType() { return originalType; }

    public static void setFoundType(ExtraTall foundType) {
        MouseMoved.foundType = foundType;
    }

    public static WeldPoint getTester() {
        return tester;
    }

    public static void setTester(WeldPoint tester) {
        MouseMoved.tester = tester;
    }

    public static int getEnterTypeNew() {
        return enterTypeNew;
    }

    public static void setEnterTypeNew(int enterTypeNew) {
        MouseMoved.enterTypeNew = enterTypeNew;
    }

    public static int[] getTelleValue() {
        return telleValue;
    }

    public static void setTelleValue(int[] telleValue) {
        MouseMoved.telleValue = telleValue;
    }
}









