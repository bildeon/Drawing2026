package com.example.application.diverse.camvas;



import com.example.application.views.list.*;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.flow.theme.lumo.LumoUtility;



import java.util.ArrayList;
import java.util.List;

@AnonymousAllowed
@Route(value = "info", layout = MainLayoutDraw.class)
@PageTitle("Weld IT AS - How to  use the system")
public class Info extends VerticalLayout {
    public List<String> out = new ArrayList<>();
    public boolean[] inBuffer = new boolean[17];

    public Info() {

        String text0 = "I menyens øverste del vises flere ulike typer sveis: Butt, Cam, Corner, Fillet, Flanged og Overlap. " +
                " Og med Stud on plate og Tube on plate i tillegg." +
                " Ved å velge den aktuelle typen kommer en side opp hvor ulike verdier må velges. " +
                " Verdiene vil variere avhengig av hvilken type sveis som er valgt. " +
                "For Butt og Fillet må en først velge hvilket design som ønskes indikert ved en av I, X, Y, U eller DU " +
                "Verdien av Gap angir avstanden mellom de to delene som skal sveises sammen mens Dy angir vertikal forskyvning. " +
                "De øvrige numeriske verdier bestemmer formen til de to elementene som skal sveises sammen. " +
                "Det er også mulig å legge korte kommentarer inn på dokumentasjonen ved bruk av feltet 'Comments'. " ;

        String text5 =  "I feltet 'Values on picture' kan det velges om plottet skal inneholde informasjon som vinkler og radius inntegnet eller ikke. " +

                " I radioknapp feltet kan en velge mellom: " +
                " 1. zoombart bilde normal  størrelse " +
                "2. zoombart bilde med liten størrelser. " +
                "3. generert lite bilde samt verditabell. " +
                "Når en trykker på 'Generate picture' vil et bilde av den valgte strukturen genereres i et tegneområde. " ;

        String text10 = "Ved valgmulighetene i menyen over tegneområdet kan en tegne inn sveisestrenger og sveisesymboler på dette plottet. " +

                "Etter at 'Draw' er aktivisert må  en klikke 3 ganger for å indikere de tre punktene som genererer en Bezier-kurve. Kurvene nummereres fortløpende " +
                "Etter at 'Line' er aktivisert må  en klikke 3 ganger for å indikere de tre punktene som genererer en Bezier-kurve. Kurvene er ikke nummerert." +

                "Etter at 'Move' er aktivisert må en først klikke innenfor det punktet en ønsker å flytte og deretter flytte det til ny plass .  " +
                "(Husk at Bezier-punktet ikke ligger på  selve kurven, men enten over eller under). " +

                "Etter at 'Delete' er aktivisert må en klikke innenfor det punktet som skal slettes. Hele Bezier-kurven blir da slettet. " +

                " Disse kommandoene virker på alle elementer som er farget";

        String text16 =      "Etter at 'Symbol' er aktivisert må en klikke på den plassen hvor det ønskes plassert. Det vil da komme frem som '.a' til '.Z'  " +
                "Symbolet kan slettes eller flyttes ved å identifisere plasseringen ved '.' tegnet i fronten " +

                "Ved å aktivisere 'New name' kommer det opp en liste over hvilke sveisestrenger som er generert. Her kan navnet på dem endres og  " +
                "genereres på nytt. " +

                "Ved å aktivisere 'Weld symbol' kommer det opp en liste over først det symbolet som står på plottet allerede, deretter det symbolet  " +
                "som står på plottet etter ny generering. Dette vil typisk være a-målet til sveisen. Og i den tredje kolonnen står verdien 0.  " +
                "Dersom et sveisesymbol ønskes på plottet, må en velge en indeks mellom 1 og 22. " +
                "Tallet 100 indikerer at dette er et av tekstsymbolene som ble generert i den opprinnelige tegningen. Disse kan også endres ved å gi ny verdi i andre kolonne.";

        String text22=        "For mulige valg se 'Symbol Table'. " +
                "Ved å aktivisere 'Cut' fåe en tegnet  en linje ved å trykke på to punkter. En grønn linje trekkes mellom dem. Dette brukes for å indikere kuttlinjer "+
                "Det ferdige plottet kan genereres til databasebuffer ved   menyvalget 'Save'. " +
                "Her legges den øverst i en buffer hvor de siste 6 bildene som er generert av den aktuele bruker ligger. " +
                "Bildene beholdes i bufferen i opp til 4 uker." +
                "Det er også mulig å laste opp egen ekstern svg fil i bufferen. NB! Filen må være en svg fil! " ;


        String text12 = "Ved å klikke på et bilde i bufferen (galleriet) får en flyttet det og aktivisert det i et tegneområde.  " +
                " Som beskrevet i menyen helt til venstre i dette tegneområdet kan en manipulere tegningen ved å legge til tekst eller viske ut elementer " +

                " Ved  hjelp av musen kan en manipulere det aktve elementet i tegneområdet ved å rotere det, flytte det, zoome det eller slette det.";

        String text30 = "En kan også enten laste ned det ferdig manipulerte bildet til lokal nedlastningsmappe eller sende det via API til Weldit siden.";

        out.add(0,text0 ) ;
        out.add(1,text5 ) ;
        out.add(2,text10 ) ;
        out.add(3,text16 ) ;
        out.add(4,text22) ;
        out.add(5,text12 ) ;

        Button backButton = new Button("Info about Choose plot - type", e -> UI.getCurrent().navigate("InfoPicture"));
        Image img = new Image("images/info.jpg", "Info image");
        img.setWidth("560px");
           setSizeFull();

        H2 header = new H2("WPS drawing program for joint configuration and string buildup");
        header.addClassNames(LumoUtility.Margin.Top.XLARGE, LumoUtility.Margin.Bottom.MEDIUM);
        //     add(header);
        add(
                new HorizontalLayout(

                        new VerticalLayout(
                                new Paragraph(out.get(0)),
                                new Paragraph(out.get(1)),
                                new Paragraph(out.get(2)),
                                new Paragraph(out.get(3)),
                                new Paragraph(out.get(4)),
                                new Paragraph(out.get(5))
                        ),
                        new HorizontalLayout(
                                img

                        )));
    }

}



