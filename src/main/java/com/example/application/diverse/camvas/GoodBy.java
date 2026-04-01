package com.example.application.diverse.camvas;

import com.example.application.under.WeldPoint;
import com.example.application.weld.CalcValues;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import java.util.ArrayList;
import com.vaadin.flow.server.VaadinSession;

@AnonymousAllowed
@Route("logout")

public class GoodBy extends Div implements HasUrlParameter<String> {
    private String s = " ";   // actual user
    private String user ;
    private static WeldPoint tester = new WeldPoint();
    private ArrayList<WeldPoint> actualList = new ArrayList<>();
    private  ArrayList<WeldPoint> weldList = new ArrayList<WeldPoint>();
    @Override
    public void setParameter(BeforeEvent beforeEvent, String s) {
        weldList =CalcValues.getWeldList();
      //  System.out.println(CalcValues.weldList.size());
        if (s.isEmpty()) {
            s = VaadinSession.getCurrent().getAttribute("tenantUser") != null ?            VaadinSession.getCurrent().getAttribute("tenantUser").toString() :            GreetingComponent.getUserIdents();
        }

        for (int i = weldList.size()-1; i< 0 ; i--) {
            tester = weldList.get(i);
            user = tester.getUser();
            if (user.equals(s)) {
                // blir slettet her
            } else {
                    actualList.add(0,tester);
            }
        }
        CalcValues.getWeldList();


        }
  //      System.out.println(CalcValues.weldList.size());
  //      UI.getCurrent().getPage().setLocation("home");
    }
