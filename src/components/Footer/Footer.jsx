function Footer() {
  return (
    <footer className="page-footer lime lighten-4">
      <div className="footer-copyright lime lighten-4">
        <div className="blue-grey-text lime lighten-4 container">
          © {new Date().getFullYear()} Copyright Text
          <a className="blue-grey-text text-darken-3 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
