import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{
  @Output() serverCreated= new EventEmitter();
  @Output() bluePrintCreated= new EventEmitter();
  // newServerName='';
  newServercontent='';

  constructor(){ }

  ngOnInit(): void {


      }
      // onAddServer(){
      //   this.serverCreated.emit({ 
      //     serverName: this.newServerName,
      //     serverContent: this.newServercontent
      //   })
      onAddServer(nameInput: any){
        this.serverCreated.emit({ 
          serverName: nameInput.value,
          serverContent: this.newServercontent
        })
  }
  
      // onAddBlueprint(){
      //   this.bluePrintCreated.emit({ 
      //     serverName: this.newServerName,
      //     serverContent: this.newServercontent
      //   })
      onAddBlueprint(nameInput: any){
        this.bluePrintCreated.emit({ 
          serverName: nameInput.value,
          serverContent: this.newServercontent
        })
      }


}
