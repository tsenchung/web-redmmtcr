<script>
  import '../app.scss';
  import LoadingIndicator from '$lib/components/LoadingIndicator.svelte';
</script>

<LoadingIndicator />
<header>
  <nav>
    <a href="/" class="logo">
      <img src="/images/logo.png" alt="Red MMT Costa Rica" />
    </a>
  </nav>
</header>
<slot />
<footer>
  <section class="content">
    <a href="/"><img src="/images/logo-w.png" alt="Red MMT Costa Rica" /></a>

    <div class="grid">
      <section class="disclaimer">
        <p>
          <span>
            Este sitio no es un medio que se actualiza con periodicidad. Algunos textos o imágenes
            incluidas en el sitio son tomadas de internet y por lo tanto se considera que están en
            el dominio público. Si hay una publicación que viole un derecho de autor, favor
            notificar por correo a
            <a href="mailto:mmtcostarica@gmail.com"><span><b>mmtcostarica@gmail.com</b></span></a>
            para que la eliminemos inmediatamente. Los autores no son responsables del contenido de los
            sitios web vinculados.
          </span>
        </p>
      </section>
      <section class="other-sites">
        <h3>Sitios de Interés</h3>
        <p class="footer-link">
          <a href="http://www.redmmt.es/"><span>Red MMT España</span></a>
        </p>
        <p class="footer-link">
          <a href="https://pileusmmt.libsyn.com/">
            <span>The MMT Podcast with Patricia&nbsp;Pino &amp; Christian Reilly</span>
          </a>
        </p>
        <p class="footer-link">
          <a href="https://realprogressives.org/macro-n-cheese-podcast/">
            <span>Macro and Cheese</span>
          </a>
        </p>
      </section>
    </div>
    <span class="copyright"
      >&copy; <time datetime="" />
      Red MMT Costa Rica.</span
    >
  </section>
</footer>
