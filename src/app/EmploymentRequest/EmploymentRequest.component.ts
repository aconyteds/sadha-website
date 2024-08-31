import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-request',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-12">
          <img
            src="assets/employment-request.png"
            alt="Employment Request"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  `,
})
export class EmploymentRequestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
