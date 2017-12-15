from django import forms
from .models import translate

class PostForm(forms.ModelForm):

    class Meta:
        model = translate
        fields = ('text')