import { Component, OnInit } from "@angular/core";
import { noop } from "rxjs";
import { map } from "rxjs/operators";

import { createHttpObservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    const http$ = createHttpObservable("/api/courses");

    const courses$ = http$.pipe(map((res) => Object.values(res["payload"])));

    http$.subscribe(
      (elm) => console.log(elm),
      noop,
      () => console.log("completed")
    );
    courses$.subscribe(
      (elm) => console.log(elm),
      noop,
      () => console.log("completed")
    );
  }
}
