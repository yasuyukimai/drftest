# Generated by Django 4.2.7 on 2023-11-28 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=255)),
                ('sex', models.CharField(max_length=10)),
                ('nation', models.CharField(max_length=50)),
            ],
        ),
    ]