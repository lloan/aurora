import Document, {Html, Head, Main, NextScript} from 'next/document';
import Preloader from '../src/Components/Preloader/Preloader';
/**
 * Shared components amongst all pages - resources needed placed here.
 */
class Doc extends Document {
  /**
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    return (
      <Html>
        <link rel="stylesheet" type="text/css" href="styles/style.css"/>
       <Head/>
        <body className="portal">
          <Preloader/>
          <Main />
          <NextScript />
          <div className="ef-background"></div>
          <div className="cursor"></div>
          
          <script src="https://kit.fontawesome.com/dc56bd4901.js" crossOrigin="anonymous" />
          <script src="js/jquery-3.3.1.min.js"></script>
          <script src="js/plugins.js"></script>
          <script src="js/common.js"></script>
        </body>

      </Html>
    );
  }
}

export default Doc;