import UIKit
import WebKit
import Turbolinks

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    
    var window: UIWindow?
    var navigationController = UINavigationController()
    var session = Session()
    
    // MARK: UIApplicationDelegate
    
    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        
        window?.rootViewController = navigationController
        
        startApplication()
        
        return true
    }
    
    func startApplication() {
        visit(NSURL(string: "http://localhost:3000")!)
    }
    
    func visit(URL: NSURL) {
        let visitableViewController = VisitableViewController(URL: URL)
        navigationController.pushViewController(visitableViewController, animated: true)
        session.visit(visitableViewController)
    }
  }