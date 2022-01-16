export class Nav {
  constructor(
    public menu: Menu [] =[],
  ){}
}

export class Menu {
  constructor(
    public label: string,
    public url: string,
    public subMenu?: Nav []
  ){}
}