import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  keypoints: Array<string> = [];

  ngOnInit(): void {
    const today = new Date().getDay();
    const firstDay = document.querySelector('.hours .left span:nth-of-type(1)') as HTMLElement;
    const secondDay = document.querySelector('.hours .left span:nth-of-type(2)') as HTMLElement;
    const thirdDay = document.querySelector('.hours .left span:nth-of-type(3)') as HTMLElement;
    const fourthDay = document.querySelector('.hours .left span:nth-of-type(4)') as HTMLElement;

    const firstHour = document.querySelector('.hours .right span:nth-of-type(1)') as HTMLElement;
    const secondHour = document.querySelector('.hours .right span:nth-of-type(2)') as HTMLElement;
    const thirdHour = document.querySelector('.hours .right span:nth-of-type(3)') as HTMLElement;
    const fourthHour = document.querySelector('.hours .right span:nth-of-type(4)') as HTMLElement;

    switch (today){
      case 0:
        fourthDay.style.color = '#D12727';
        fourthHour.style.color = '#D12727';
        break;
      case 5:
        secondDay.style.color = '#D12727';
        secondHour.style.color = '#D12727';
        break;
      case 6:
        thirdDay.style.color = '#D12727';
        thirdHour.style.color = '#D12727';
        break;
      default:
        firstDay.style.color = '#D12727';
        firstHour.style.color = '#D12727';
        break;
    }

    let url = window.location.href;

    const littleTitle = document.querySelector(".little__title") as HTMLElement;
    const bigTitle = document.querySelector(".big__title") as HTMLElement;
    const serviceImg = document.querySelector(".service__img") as HTMLImageElement;
    const topText = document.querySelector(".top__text") as HTMLElement;
    const botText = document.querySelector(".bot__text") as HTMLElement;


    switch (true){
      case url.includes("service-one"):
        this.keypoints = [];
        littleTitle.innerHTML = "NETTOYAGE";
        bigTitle.innerHTML = "NETTOYAGE APPROFONDI";
        serviceImg.src =  "../../assets/big3.jpeg";
        serviceImg.alt = "Photographie de nettoyage de véhicule.";
        topText.innerHTML = "Sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris cursus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nulla posuere sollicitudin aliquam ultrices sagittis. Cursus risus at ultrices mi tempus imperdiet. Ultricies mi quis hendrerit dolor magna eget est lorem. Sodales ut etiam sit amet nisl purus in mollis. Ultrices neque ornare aenean euismod elementum nisi quis. Vel turpis nunc eget lorem dolor sed viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed tempus urna et pharetra pharetra massa massa ultricies.";
        this.keypoints.push("INTÉRIEUR");
        this.keypoints.push("EXTÉRIEUR");
        this.keypoints.push("AUTRES");
        botText.innerHTML = "Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Eget velit aliquet sagittis id consectetur purus ut. Rutrum quisque non tellus orci ac auctor augue. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Congue mauris rhoncus aenean vel elit scelerisque. Volutpat est velit egestas dui id ornare. Tellus mauris a diam maecenas sed enim ut. Egestas tellus rutrum tellus pellentesque eu. A pellentesque sit amet porttitor";
        break;

      case url.includes("service-two"):
        this.keypoints = [];
        littleTitle.innerHTML = "TRAITEMENT ODEURS";
        bigTitle.innerHTML = "TRAITEMENT ODEURS";
        serviceImg.src =  "../../assets/odeur.jpg";
        serviceImg.alt = "Photographie de traitement anti odeur.";
        topText.innerHTML = "Sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris cursus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nulla posuere sollicitudin aliquam ultrices sagittis. Cursus risus at ultrices mi tempus imperdiet. Ultricies mi quis hendrerit dolor magna eget est lorem. Sodales ut etiam sit amet nisl purus in mollis. Ultrices neque ornare aenean euismod elementum nisi quis. Vel turpis nunc eget lorem dolor sed viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed tempus urna et pharetra pharetra massa massa ultricies.";
        this.keypoints.push("GARANTIE SANS ODEUR");
        this.keypoints.push("ODEURS CORRIACES");
        botText.innerHTML = "Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Eget velit aliquet sagittis id consectetur purus ut. Rutrum quisque non tellus orci ac auctor augue. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Congue mauris rhoncus aenean vel elit scelerisque. Volutpat est velit egestas dui id ornare. Tellus mauris a diam maecenas sed enim ut. Egestas tellus rutrum tellus pellentesque eu. A pellentesque sit amet porttitor";
        break;

      case url.includes("service-three"):
        this.keypoints = [];
        littleTitle.innerHTML = "CARROSSERIE";
        bigTitle.innerHTML = "CORRECTION CARROSSERIE";
        serviceImg.src =  "../../assets/carrosserie.jpg";
        serviceImg.alt = "Photographie d'une correction de carrosserie.";
        topText.innerHTML = "Sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris cursus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nulla posuere sollicitudin aliquam ultrices sagittis. Cursus risus at ultrices mi tempus imperdiet. Ultricies mi quis hendrerit dolor magna eget est lorem. Sodales ut etiam sit amet nisl purus in mollis. Ultrices neque ornare aenean euismod elementum nisi quis. Vel turpis nunc eget lorem dolor sed viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed tempus urna et pharetra pharetra massa massa ultricies.";
        this.keypoints.push("POLISSAGE");
        this.keypoints.push("RAYURES EN SURFACE");
        botText.innerHTML = "Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Eget velit aliquet sagittis id consectetur purus ut. Rutrum quisque non tellus orci ac auctor augue. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Congue mauris rhoncus aenean vel elit scelerisque. Volutpat est velit egestas dui id ornare. Tellus mauris a diam maecenas sed enim ut. Egestas tellus rutrum tellus pellentesque eu. A pellentesque sit amet porttitor";
        break;

      case url.includes("service-four"):
        this.keypoints = [];
        littleTitle.innerHTML = "OPTIQUES";
        bigTitle.innerHTML = "CORRECTION OPTIQUES";
        serviceImg.src =  "../../assets/optiques.jpg";
        serviceImg.alt = "Photographie d'une correction d'optiques.";
        topText.innerHTML = "Sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris cursus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nulla posuere sollicitudin aliquam ultrices sagittis. Cursus risus at ultrices mi tempus imperdiet. Ultricies mi quis hendrerit dolor magna eget est lorem. Sodales ut etiam sit amet nisl purus in mollis. Ultrices neque ornare aenean euismod elementum nisi quis. Vel turpis nunc eget lorem dolor sed viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed tempus urna et pharetra pharetra massa massa ultricies.";
        this.keypoints.push("RAPIDE");
        this.keypoints.push("100% TRANSPARENT");
        botText.innerHTML = "Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Eget velit aliquet sagittis id consectetur purus ut. Rutrum quisque non tellus orci ac auctor augue. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Congue mauris rhoncus aenean vel elit scelerisque. Volutpat est velit egestas dui id ornare. Tellus mauris a diam maecenas sed enim ut. Egestas tellus rutrum tellus pellentesque eu. A pellentesque sit amet porttitor";
        break;

      case url.includes("service-five"):
        this.keypoints = [];
        littleTitle.innerHTML = "JANTES";
        bigTitle.innerHTML = "RECTIFICATION JANTES";
        serviceImg.src =  "../../assets/jantes.jpg";
        serviceImg.alt = "Photographie d'une rectification de jantes.";
        topText.innerHTML = "Sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris cursus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nulla posuere sollicitudin aliquam ultrices sagittis. Cursus risus at ultrices mi tempus imperdiet. Ultricies mi quis hendrerit dolor magna eget est lorem. Sodales ut etiam sit amet nisl purus in mollis. Ultrices neque ornare aenean euismod elementum nisi quis. Vel turpis nunc eget lorem dolor sed viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed tempus urna et pharetra pharetra massa massa ultricies.";
        this.keypoints.push("RAYURES LÉGÈRES");
        this.keypoints.push("POLISSAGE");
        this.keypoints.push("NETTOYAGE");
        botText.innerHTML = "Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Eget velit aliquet sagittis id consectetur purus ut. Rutrum quisque non tellus orci ac auctor augue. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Congue mauris rhoncus aenean vel elit scelerisque. Volutpat est velit egestas dui id ornare. Tellus mauris a diam maecenas sed enim ut. Egestas tellus rutrum tellus pellentesque eu. A pellentesque sit amet porttitor";
        break;

      case url.includes("service-six"):
        this.keypoints = [];
        littleTitle.innerHTML = "RECHERCHE";
        bigTitle.innerHTML = "RECHERCHE DE VÉHICULE";
        serviceImg.src =  "../../assets/recherche.jpg";
        serviceImg.alt = "Photographie de recherche de véhicule.";
        topText.innerHTML = "Sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris cursus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nulla posuere sollicitudin aliquam ultrices sagittis. Cursus risus at ultrices mi tempus imperdiet. Ultricies mi quis hendrerit dolor magna eget est lorem. Sodales ut etiam sit amet nisl purus in mollis. Ultrices neque ornare aenean euismod elementum nisi quis. Vel turpis nunc eget lorem dolor sed viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed tempus urna et pharetra pharetra massa massa ultricies.";
        this.keypoints.push("VÉHICULES NEUFS");
        this.keypoints.push("VÉHICULES D'OCCASION");
        this.keypoints.push("VÉHICULES DE COLLECTION");
        botText.innerHTML = "Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Eget velit aliquet sagittis id consectetur purus ut. Rutrum quisque non tellus orci ac auctor augue. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Congue mauris rhoncus aenean vel elit scelerisque. Volutpat est velit egestas dui id ornare. Tellus mauris a diam maecenas sed enim ut. Egestas tellus rutrum tellus pellentesque eu. A pellentesque sit amet porttitor";
        break;

      case url.includes("service-seven"):
        this.keypoints = [];
        littleTitle.innerHTML = "FILM PPF";
        bigTitle.innerHTML = "POSE DE FILM PPF";
        serviceImg.src =  "../../assets/big1.jpg";
        serviceImg.alt = "Photographie d'une pose de film PPF.";
        topText.innerHTML = "Sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris cursus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nulla posuere sollicitudin aliquam ultrices sagittis. Cursus risus at ultrices mi tempus imperdiet. Ultricies mi quis hendrerit dolor magna eget est lorem. Sodales ut etiam sit amet nisl purus in mollis. Ultrices neque ornare aenean euismod elementum nisi quis. Vel turpis nunc eget lorem dolor sed viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed tempus urna et pharetra pharetra massa massa ultricies.";
        this.keypoints.push("PROFESSIONNEL CERTIFIÉ")
        this.keypoints.push("PROTECTION IMPACTS")
        this.keypoints.push("RÉSULTAT GARANTI")
        botText.innerHTML = "Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Eget velit aliquet sagittis id consectetur purus ut. Rutrum quisque non tellus orci ac auctor augue. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Congue mauris rhoncus aenean vel elit scelerisque. Volutpat est velit egestas dui id ornare. Tellus mauris a diam maecenas sed enim ut. Egestas tellus rutrum tellus pellentesque eu. A pellentesque sit amet porttitor";
        break;

      case url.includes("service-eight"):
        this.keypoints = [];
        littleTitle.innerHTML = "CÉRAMIQUE";
        bigTitle.innerHTML = "APPLICATION DE CÉRAMIQUE";
        serviceImg.src =  "../../assets/ceramique.jpg";
        serviceImg.alt = "Photographie d'une application de céramique.";
        topText.innerHTML = "Sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris cursus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nulla posuere sollicitudin aliquam ultrices sagittis. Cursus risus at ultrices mi tempus imperdiet. Ultricies mi quis hendrerit dolor magna eget est lorem. Sodales ut etiam sit amet nisl purus in mollis. Ultrices neque ornare aenean euismod elementum nisi quis. Vel turpis nunc eget lorem dolor sed viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed tempus urna et pharetra pharetra massa massa ultricies.";
        this.keypoints.push("IMPERMÉABLE");
        this.keypoints.push("REFLET BRILLANCE");
        this.keypoints.push("PROTECTION UV & RAYURES LÉGÈRES");
        this.keypoints.push("PROFESSIONNEL ACCRÉDITÉ");
        botText.innerHTML = "Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Eget velit aliquet sagittis id consectetur purus ut. Rutrum quisque non tellus orci ac auctor augue. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Congue mauris rhoncus aenean vel elit scelerisque. Volutpat est velit egestas dui id ornare. Tellus mauris a diam maecenas sed enim ut. Egestas tellus rutrum tellus pellentesque eu. A pellentesque sit amet porttitor";
        break;

      case url.includes("service-nine"):
        this.keypoints = [];
        littleTitle.innerHTML = "DETAILING";
        bigTitle.innerHTML = "SERVICE DE DETAILING";
        serviceImg.src =  "../../assets/big3.jpeg";
        serviceImg.alt = "Text description";
        topText.innerHTML = "Sed lectus vestibulum mattis ullamcorper. Ante in nibh mauris cursus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nulla posuere sollicitudin aliquam ultrices sagittis. Cursus risus at ultrices mi tempus imperdiet. Ultricies mi quis hendrerit dolor magna eget est lorem. Sodales ut etiam sit amet nisl purus in mollis. Ultrices neque ornare aenean euismod elementum nisi quis. Vel turpis nunc eget lorem dolor sed viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Porttitor lacus luctus accumsan tortor posuere ac ut. Sed tempus urna et pharetra pharetra massa massa ultricies.";
        this.keypoints.push("NETTOYAGE COMPLET");
        this.keypoints.push("RECTIFICATIONS");
        this.keypoints.push("JANTES");
        botText.innerHTML = "Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Eget velit aliquet sagittis id consectetur purus ut. Rutrum quisque non tellus orci ac auctor augue. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Congue mauris rhoncus aenean vel elit scelerisque. Volutpat est velit egestas dui id ornare. Tellus mauris a diam maecenas sed enim ut. Egestas tellus rutrum tellus pellentesque eu. A pellentesque sit amet porttitor";
        break;


      default:
        console.log('error')
        break;

    }






  }
}
