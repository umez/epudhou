export class Nav {
  constructor(
    public label: string,
    public url: string,
    public subMenu?: Nav []
  ){}
}