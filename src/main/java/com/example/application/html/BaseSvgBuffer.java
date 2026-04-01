package com.example.application.html;



import com.example.application.Mouse.DrawWeldSave;
import com.example.application.diverse.camvas.GreetingComponent;
import com.example.application.weld.CalcBase;
import com.example.application.weld.CalcUser;
import com.example.application.weld.CalcValues;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.apache.batik.transcoder.TranscoderException;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import com.example.application.zoomdb.SvgImageAdminService;
import static com.example.application.zoomdb.SvgImageAdminService.repository;
/**
 * write a svg file in H2 database
 *
 * @author Erik Andreas Vold -  erikvold84@gmail.com
 * */
@AnonymousAllowed
@Route( "basebuffer")
@PageTitle("Weld IT AS - Printing welding string")
@JsModule("./svg-zoom.js")
public class BaseSvgBuffer  extends  AppLayout {   //  extends AppLayout   HorizontalLayout
    private static String[]  partImage = new String[10];
    //   private SvgImageRepository repository;
    private final  SvgImageAdminService kli = new  SvgImageAdminService(repository);
    private String outSvg ;
    private String svgNew ;
    private String svgStop ;
    private String svgFile;
    private String fileName;
    private String svgSymbol;
    private String userId = CalcValues.getUserID();
    private int plotModell ;

    public BaseSvgBuffer() throws IOException, TranscoderException {
        String username = GreetingComponent.getUserIdents();

        new CalcValues();
        this.outSvg = CalcBase.getOutSvg();
        this.svgStop = CalcBase.getSvgStop() ;
        this.svgSymbol = CalcBase.getSvgSymbol();
        this.svgNew = CalcBase.getSvgNew();
        this.plotModell = CalcUser.getPlotModell();
        new DrawWeldSave();
        partImage = CalcUser.getPartImage();
        if (plotModell == 1 ) { svgNew = partImage[1]; }
        if (plotModell == 2 ) { svgNew = partImage[2]; }
        if (plotModell == 3 ) { svgNew = partImage[3]; }
        if (plotModell == 4 ) { svgNew =  partImage[1] + partImage[2] + partImage[3] + partImage[4]  ; }
        CalcUser.setPartImage(partImage);
        svgFile = outSvg + svgNew + svgSymbol + CalcBase.getSvgExtra() + svgStop;
        fileName = CalcBase.getPathName() + generateFilename();
        String file = fileName + ".svg";
        String svgContent = svgFile;

        kli.uploadSvg(file, svgContent, userId ) ;
        kli.deleteOlderThanFourWeeks();

        UI.getCurrent().getPage().setLocation("lastviewsave");


    }

    private String generateFilename() {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("ddMMyyyyHHmmss");
        LocalDateTime now = LocalDateTime.now();
        return dtf.format(now);
    }

}


