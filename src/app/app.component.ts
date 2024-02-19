import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  selector: 'hdbootcamp-root',
  template: `
    <header>
      <h1>Conecta tu wallet para ver tu saldo</h1>

      <hd-wallet-multi-button></hd-wallet-multi-button>
    </header>
  `,
})
export class AppComponent {}
