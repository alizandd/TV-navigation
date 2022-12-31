package com.nav;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
 import android.view.KeyEvent; // <--- import
import com.github.kevinejohn.keyevent.KeyEventModule; // <--- import

public class MainActivity extends ReactActivity {



      @Override  // <--- Add this method if you want to react to keyDown
             public boolean dispatchKeyEvent( KeyEvent event) {


              if (event.getAction() == 0) {
               KeyEventModule.getInstance().onKeyDownEvent(event.getKeyCode(), event);
               }

               return super.dispatchKeyEvent(event);
             }

             @Override  // <--- Add this method if you want to react to keyUp
             public boolean onKeyUp(int keyCode, KeyEvent event) {
               KeyEventModule.getInstance().onKeyUpEvent(keyCode, event);

               // There are 2 ways this can be done:
               //  1.  Override the default keyboard event behavior
               //    super.onKeyUp(keyCode, event);
               //    return true;

               //  2.  Keep default keyboard event behavior
               //    return super.onKeyUp(keyCode, event);

               // Using method #1

               return super.onKeyUp(keyCode, event);
             }

             @Override
             public boolean onKeyMultiple(int keyCode, int repeatCount, KeyEvent event) {
                 KeyEventModule.getInstance().onKeyMultipleEvent(keyCode, repeatCount, event);
                 return super.onKeyMultiple(keyCode, repeatCount, event);
             }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "nav";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the renderer you wish to use - the new renderer (Fabric) or the old renderer
   * (Paper).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    @Override
    protected boolean isConcurrentRootEnabled() {
      // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
      // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }
  }
}
