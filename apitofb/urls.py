from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'apitofb.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    # url(r'^$', 'apitofbapp.views.home', name='home'),
    # url(r'^$', 'apitofbapp.views.test', name='test'),
    url(r'^forms/$', 'apitofbapp.views.forms', name='forms'),
    url(r'^$', 'apitofbapp.views.login', name='login'),
    # url(r'^test/$', 'apitofbapp.views.test', name='test'),
    url('', include('social.apps.django_app.urls', namespace='social')),
    url('', include('django.contrib.auth.urls', namespace='auth')),
)
