/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

@Component({
    selector: 'bh-homecontent',
    templateUrl: './homecontent.template.html'
})

export class homecontentComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    whatWeDo = [
        {
            title: "Home",
            content: "Home Content <br>KasiDevs was establish on the principal philosophy of – “Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.",
            img: "Web/Icons/township.jpg",
            link: "../main"
        },
        {
            title: "About",
            content: "About Content <br>KasiDevs was establish on the principal philosophy of – “Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.",
            img: "Web/Icons/township.jpg",
            link: "../about"
        },
        {
            title: "Programmes",
            content: "Programmes Content <br>KasiDevs was establish on the principal philosophy of – “Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime.",
            img: "Web/Icons/township.jpg",
            link: "../programmes"
        },
    ]

    constructor(private bdms: NDataModelService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete(dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
