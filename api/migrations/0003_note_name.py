# Generated by Django 4.0.6 on 2023-01-06 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_note_created_note_updated'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='name',
            field=models.CharField(max_length=40, null=True),
        ),
    ]
