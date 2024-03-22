
class GlobalVar {

    private data: any[];

    constructor(){
        this.data = []
    }

    setData (data: any) {
        this.data = data
    }

    getData () {
        return this.data
    }


}

export const globalVar = new GlobalVar()