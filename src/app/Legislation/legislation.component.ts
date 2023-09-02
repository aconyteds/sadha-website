import { Component } from '@angular/core';
import { config } from '../Configs/config';
import { officers } from "../Configs/officers";

@Component({
  selector: 'app-legislation',
  templateUrl: "./legislation.template.html",
  styles: [`
    .legislation-section-container > * {
      margin-top: 2rem;
    }

    .logo {
      max-width: 100%;
      max-height: 100px;
    }
  `]
})

export class LegislationComponent {
  public trustee = officers.filter((officer) => officer.position === "Trustee")[0];
  public delegates: string[] = [
    "Stacy Limas (SADHA President)",
    "Andrea Wiseman (SADHA Pesident-Elect)",
    "Jodie Hostetter  (SADHA Trustee)",
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
  public term: string = config.term;
  public constructor() { }
}
