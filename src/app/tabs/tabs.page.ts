import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { IonTabs } from '@ionic/angular'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    @ViewChild('tabs', { static: false }) tabs: IonTabs;
    
    constructor() {}

    
    tabIconName = {
        inicio : { selected: "home", unselected: "home-outline", current : "home"},
        busca : { selected: "search", unselected: "search-outline", current : ""},
        pedidos : { selected: "document-text", unselected: "document-text-outline", current : ""},
        perfil : { selected: "person", unselected: "person-outline", current : ""}
    }

    
    currentTabChange() {
        this.tabIconName.inicio.current = this.tabIconName.inicio.unselected;
        this.tabIconName.busca.current = this.tabIconName.busca.unselected;
        this.tabIconName.pedidos.current = this.tabIconName.pedidos.unselected;
        this.tabIconName.perfil.current = this.tabIconName.perfil.unselected;

        if ( this.tabs.getSelected() == "tabInicio") {
            this.tabIconName.inicio.current = this.tabIconName.inicio.selected;
        }else if ( this.tabs.getSelected() == "tabBusca") {
            this.tabIconName.busca.current = this.tabIconName.busca.selected;
        }else if ( this.tabs.getSelected() == "tabPedidos") {
            this.tabIconName.pedidos.current = this.tabIconName.pedidos.selected;
        }else if ( this.tabs.getSelected() == "tabPerfil") {
            this.tabIconName.perfil.current = this.tabIconName.perfil.selected;
        }
    }

}
