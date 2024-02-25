import { ChangeDetectorRef, Component } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lsc-smartcarthub-webapp';
  // some fields to store our state so we can display it in the UI
  idleState = "NOT_STARTED";
  countdown?: number ;
  lastPing?: Date ;

  // add parameters for Idle and Keepalive (if using) so Angular will inject them from the module
  constructor(private idle: Idle, keepalive: Keepalive, cd: ChangeDetectorRef,
    private toastrService: ToastrService ) {
    // set idle parameters
    idle.setIdle(5); // how long can they be inactive before considered idle, in seconds
    idle.setTimeout(5); // how long can they be idle before considered timed out, in seconds
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); // provide sources that will "interrupt" aka provide events indicating the user is active

    // do something when the user becomes idle
    idle.onIdleStart.subscribe(() => {
      this.toastrService.info("Idle state detected","User Idle");
      this.idleState = "IDLE";
    });
    // do something when the user is no longer idle
    idle.onIdleEnd.subscribe(() => {
      this.toastrService.success("Active!","User Active");
      this.idleState = "NOT_IDLE";
      console.log(`${this.idleState} ${new Date()}`)
      this.countdown = undefined;
      cd.detectChanges(); // how do i avoid this kludge?
    });
    // do something when the user has timed out
    idle.onTimeout.subscribe(() => {
      this.idleState = "TIMED_OUT";
      this.toastrService.info("Session expired!","Timeout")
    });
    // do something as the timeout countdown does its thing
    idle.onTimeoutWarning.subscribe(seconds => {this.countdown = seconds;
      this.toastrService.warning("Your session will expire soon!","Idle state detected")});

    // set keepalive parameters, omit if not using keepalive
    keepalive.interval(15); // will ping at this interval while not idle, in seconds
    keepalive.onPing.subscribe(() => this.lastPing = new Date()); // do something when it pings
  }

  reset() {
    // we'll call this method when we want to start/reset the idle process
    // reset any component state and be sure to call idle.watch()
    this.idle.watch();
    this.idleState = "NOT_IDLE";
    this.countdown = undefined;
    this.lastPing = undefined;
  }

  ngOnInit(): void {
    // right when the component initializes, start reset state and start watching
    this.reset();
  }
}
