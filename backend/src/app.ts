import  express, {Application} from "express";

class App{
    public app:Application;
    constructor(){
        this.app = express();
    }

    listen(){
        this.app.listen(3333, () => console.log('ggrgr'));
    }
}
export{App}