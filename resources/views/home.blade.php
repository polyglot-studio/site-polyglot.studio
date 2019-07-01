@extends('templates.primary-app')

@section('contenttt')
@endsection

@section('content')
<nav id="mainnav" class="navbar navbar-expand-sm navbar-dark bg-dark nav-is-top" style="bottom: 100vh;">
  <a class="navbar-brand" href="#">Polyglot Studios</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="fa fa-th-large"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
<div id="contentHolder">
  <div id="contentSlider">
    <div id="topContent" class="contentHalves offscreen-top topLayer">
      @include('pages.home')
    </div>
    <div id="bottomContent" class="contentHalves offscreen-bottom">
    </div>
  </div>
</div>
@endsection
