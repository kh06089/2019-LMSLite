# Generated by Django 2.1.7 on 2019-04-16 21:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0017_auto_20190416_2138'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grade',
            name='assignment',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, to='courses.Assignment'),
        ),
    ]
