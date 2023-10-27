import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {


  // We use the property bellow to store the key 
  private storageKey = 'user-background';
  // We use the property bellow to store the value 
  private defaultColor = '#bedac9';

  userBackgroundColor: any = null;
 
  // We set the initial value on run time (when the component is build)
  ngOnInit(): void {
    // we call the method here and return the current instance
    this.loadBackgroundPreferences();
  }

  // this is connected to the template, we pass in the template reference variable
  // Only thing changing here is the color being passed down from the template
  saveBackgroundColor(color: string): void {
    localStorage.setItem(this.storageKey, color);
    this.loadBackgroundPreferences();
  }

  // This method is private because there is no interaction for the user needed to 
  // one load and to set the window style
  private loadBackgroundPreferences(): void {
    // We call the getBackgroundColor method and set the return equal to userBackgroundColor
    this.userBackgroundColor = this.getBackgroundColor();  // in this case it goes from null to color returned
    window.document.body.style.backgroundColor = this.getBackgroundColor(); // this just loads the color
  }

  // Create the method getBackgroundColor, this returns a string we so can have the type of the method set to a string  
  private getBackgroundColor(): string {
    return localStorage.getItem(this.storageKey) || this.defaultColor;
  }


  removePreferences(): void {
    localStorage.removeItem(this.storageKey);
    this.loadBackgroundPreferences();
  }

}
