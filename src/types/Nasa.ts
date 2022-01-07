/**
 * 今日の惑星のクラス
 */
export class Nasa {
  constructor(
    //日付
    private _date: Date,
    //タイトル
    private _title: string,
    //画像
    private _url: string,
    //説明
    private _explanation: string
  ) {}

  public get date(): Date {
    return this._date;
  }

  public set date(date: Date) {
    this._date = date;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get url(): string {
    return this._url;
  }

  public set url(url: string) {
    this._url = url;
  }

  public get explanation(): string {
    return this._explanation;
  }

  public set explanation(explanation: string) {
    this._explanation = explanation;
  }
}
