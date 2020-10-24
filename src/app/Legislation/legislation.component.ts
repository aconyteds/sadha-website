import { Component } from '@angular/core';
import { officers } from "../Configs/officers";

@Component({
  selector: 'app-legislation',
  templateUrl: "./legislation.template.html",
  styles: [`
    .legislation-section-container > * {
      margin-top: 2rem;
    }
  `]
})

export class LegislationComponent {
  public trustee = officers.filter((officer) => officer.position === "Trustee")[0];
  public delegates: string[] = [
    "Stacy Limas (SADHA President)",
    "Andrea Wiseman (SADHA Pesident-Elect)",
    "Mercedes Mendoza (SADHA Trustee)",
    "Sarah Roddy",
    "Sandra Mendoza",
    "Carmela Villareal",
    "Monna Carpenter-Barin",
    "Jodie Hostetter",
    "Saralyn Ferrell",
    "Grace Uwize-Allen",
    "Angie Sherlock",
    "1st Alternate – Celia Aviles",
    "2ndAlternate – Kelli",
    "3rd Alternate – Virginia Carrillo"
  ];
  public constructor() {}
}
