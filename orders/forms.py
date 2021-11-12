from django import forms
from .models import Invoice


class OnlineOrder(forms.ModelForm):
    name = forms.CharField(max_length=60, widget=forms.TextInput(
        attrs = {
            'placeholder': 'Name',
            'class': 'form-control',
            'name': 'name',
            'type': 'text',
            'id': 'name',
            'required': "required"

        }
    ))
    surname = forms.CharField(max_length=60, widget=forms.TextInput(
        attrs = {
            'placeholder': 'Surname',
            'class': 'form-control',
            'name': 'surname',
            'type': 'text',
            'id': 'surname',
            'required': "required"
        }
    ))
    address = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs = {
            'placeholder': 'Location/Address',
            'class': 'form-control',
            'name': 'address',
            'type': 'text',
            'id': 'address',
            'required': "required"
        }
    ))
    email = forms.CharField(max_length=60, widget=forms.TextInput(
        attrs = {
            'placeholder': 'Email',
            'class': 'form-control',
            'name': 'email',
            'type': 'email',
            'id': 'form_email',
            'required': "required"
        }
    ))
    contact = forms.CharField(max_length=10, widget=forms.TextInput(
        attrs = {
            'placeholder': 'Phone',
            'class': 'form-control',
            'name': 'contact',
            'type': 'text',
            'id': 'contact',
            'required': "required"           
        }
    ))
    quantity = forms.IntegerField(widget=forms.NumberInput(
        attrs = {
            'placeholder': 'Quantity',
            'class': 'form-control',
            'name': 'quantity',
            'type': 'text',
            'id': 'quantity',
            'required': "required"
        }
    ))
    class Meta:
        model = Invoice
        fields = '__all__'
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.sub_total = instance.quantity * 75
        if commit:
            instance.save()
        return instance