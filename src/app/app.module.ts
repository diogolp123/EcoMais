import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { AlertController, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { CadastroConsumoPage } from '../pages/cadastro-consumo/cadastro-consumo';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { CallChatProvider } from '../providers/call-chat/call-chat';
import { CameraProvider } from '../providers/camera/camera';
import { ContextChatProvider } from '../providers/context-chat/context-chat';
import { EletrodomesticoServiceProvider } from '../providers/eletrodomestico-service/eletrodomestico-service';
import { SaveDataProvider } from '../providers/save-data/save-data';
import { SessionProvider } from '../providers/session/session';
import { SingUpServiceProvider } from '../providers/sing-up-service/sing-up-service';
import { BodyTextChatComponent } from './../components/body-text-chat/body-text-chat';
import { TextChatComponent } from './../components/text-chat/text-chat';
import { AboutPage } from './../pages/about/about';
import { CadastroEletrodomesticoPage } from './../pages/cadastro-eletrodomestico/cadastro-eletrodomestico';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { ChatSparkPage } from './../pages/chat-spark/chat-spark';
import { ConfigPage } from './../pages/config/config';
import { TabsPage } from './../pages/tabs/tabs';
import { MyApp } from './app.component';
import { ConsumoServiceProvider } from '../providers/consumo-service/consumo-service';

//import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    CadastroConsumoPage,
    ConfigPage,
    CadastroEletrodomesticoPage,
    ChatSparkPage,
    AboutPage,
    BodyTextChatComponent,
    TextChatComponent
,
    TabsPage
  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      tabsHideOnSubPages: true,
      scrollAssist: false, 
      autoFocusAssist: false      
      }),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    CadastroEletrodomesticoPage,
    CadastroConsumoPage,
    CadastroPage,
    TabsPage,
    ChatSparkPage,
    ConfigPage,
    AboutPage,
    TextChatComponent, BodyTextChatComponent
  ],
  providers: [
    HttpModule,
    StatusBar,
    SplashScreen,
    HttpClient,
    AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContextChatProvider,
    AlertController,
    CallChatProvider,
    SaveDataProvider,
    CameraProvider,
    BodyTextChatComponent,
    Camera,
    Base64ToGallery,
    //Keyboard,
    EletrodomesticoServiceProvider,
    SessionProvider,
    SingUpServiceProvider,
    ConsumoServiceProvider
  ]
})
export class AppModule {}