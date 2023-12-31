import { Observable } from "rxjs";

export function createHttpObservable(url: String) {
  return Observable.create((observer) => {
    fetch("/api/courses")
      .then((response) => response.json())
      .then((body) => {
        observer.next(body);
        observer.complete();
      })
      .catch((err) => observer.error(err));
  });
}
