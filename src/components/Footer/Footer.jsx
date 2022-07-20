function Footer() {
  return (
    <footer className="page-footer green accent-4">
      <div className="footer-copyright">
        <div className="blue-grey-text text-darken-3 container">
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
