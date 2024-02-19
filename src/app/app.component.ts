import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { ShyftApiService } from './shyft-api.service';
import { WalletStore } from '@heavy-duty/wallet-adapter'
import { toSignal } from '@angular/core/rxjs-interop'
import { computedAsync } from 'ngxtension/computed-async';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  selector: 'hdbootcamp-root',
  template: `
    <header>
      <h1>Conecta tu wallet para ver tu saldo USDT</h1>

      <hd-wallet-multi-button></hd-wallet-multi-button>

      @if (account()) {
        <div>

          <img [src]="account()?.info?.image" class="usdt-image" />
          <p class="usdt-bal">{{ account()?.balance }}</p>
        </div>


      }
    
    </header>
  `,
})
export class AppComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: true },
  )
}
