from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template.context import RequestContext


# Create your views here.
def home(request):
    context = RequestContext(request, {'request': request, 'user': request.user})

    return render_to_response('home.html', context_instance=context)

# def test(request):
#
#     return render(request, 'test.html')

def forms(request):

    return render(request, 'forms.html')

def login(request):

    return render(request, 'login.html')
