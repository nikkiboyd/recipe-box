export class Recipe {
  public cooked: boolean = false;
  constructor(public title: string, public ingredients: string[], public directions: string[], public rating: number) { }
}
