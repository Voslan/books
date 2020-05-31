import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `
    <div class="css-v0mdt">
      <ul class="leafygreen-ui-bdnco">
        <li>
          <h4 class="leafygreen-ui-1tz48n8 ">Organization</h4>
          <ul role="menu" class="leafygreen-ui-bdnco">
            <li role="none"><a class="leafygreen-ui-1383ole"><div class="leafygreen-ui-1aen1ds">Projects</div></a></li>
            <li role="none"><a class="leafygreen-ui-1383ole"><div class="leafygreen-ui-1aen1ds">Alerts</div></a></li>
            <li role="none"><a class="leafygreen-ui-1383ole"><div class="leafygreen-ui-1aen1ds">Activity Feed</div></a></li>
            <li role="none"><a class="leafygreen-ui-1383ole"><div class="leafygreen-ui-1aen1ds">Settings</div></a></li>
            <li role="none"><a class="leafygreen-ui-1383ole"><div class="leafygreen-ui-1aen1ds">Access Manager</div></a></li>
            <li role="none"><a class="leafygreen-ui-1383ole"><div class="leafygreen-ui-1aen1ds">Billing</div></a></li>
            <li role="none"><a class="leafygreen-ui-1383ole"><div class="leafygreen-ui-1aen1ds">Support</div></a></li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    ol, ul {
      margin-top: 0;
      margin-bottom: 10px;
    }
    .css-v0mdt {
      overflow-y: auto;
      padding-bottom: 24px;
      width: auto;
    }
    .leafygreen-ui-bdnco {
      margin-block-start: 0px;
      margin-block-end: 0px;
      padding-inline-start: 0px;
      list-style-type: none;
      padding: 0px;
    }
    .leafygreen-ui-1tz48n8 {
      font-size: 12px;
      letter-spacing: 0.3px;
      font-weight: bold;
      text-transform: uppercase;
      color: rgb(17, 97, 73);
      margin-top: 12px;
      margin-bottom: 0px;
      line-height: 1.3em;
      padding: 4px 16px;
    }
    .leafygreen-ui-bdnco {
      margin-block-start: 0px;
      margin-block-end: 0px;
      padding-inline-start: 0px;
      list-style-type: none;
      padding: 0px;
    }
    .leafygreen-ui-1383ole {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      min-height: 0px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      color: inherit;
      text-align: left;
      font-family: Akzidenz, "‘Helvetica Neue’", Helvetica, Arial, sans-serif;
      -webkit-appearance: none;
      z-index: 0;
      margin: unset;
      padding: 8px 16px;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      border-radius: 5px;
      text-decoration: none;
      background: none;

      &::before {
        {
          content: "";
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          background-color: transparent;
          transform: scale(0.9, 0.7);
          border-radius: 5px;
          transition: all 150ms ease-in-out 0s;
      }
    }
    .leafygreen-ui-1aen1ds {
      position: relative;
      z-index: 1;
      font-size: 14px;
      font-weight: normal;
      text-transform: capitalize;
      color: rgb(61, 79, 88);
    }
  `]
})

export class SideNavComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}